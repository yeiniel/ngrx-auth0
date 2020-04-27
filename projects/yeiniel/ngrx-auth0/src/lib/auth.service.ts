import { Inject, Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, concatMap, shareReplay, tap } from 'rxjs/operators';
import createAuth0Client, { Auth0ClientOptions } from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';

import { AuthServiceOptions } from './auth-service-options';

@Injectable()
export class AuthService {

  /** instance of Auth0 client */
  protected auth0Client$: Observable<Auth0Client>;

  protected handleRedirectCallback$: Observable<any>;

  public isAuthenticated$: Observable<boolean>;

  constructor(@Inject(AuthServiceOptions) protected options: Auth0ClientOptions) {

    // setup the auth0 client
    this.auth0Client$ = (from(
      createAuth0Client(options)
    ) as Observable<Auth0Client>).pipe(
      shareReplay(1), // Every subscription receives the same shared value
      catchError(err => throwError(err))
    );

    this.handleRedirectCallback$ = this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
    );

    // setup the isAuthenticated$ observable
    this.isAuthenticated$ = this.auth0Client$.pipe(
      concatMap(client => from(client.isAuthenticated()))
    );

    // handle redirect from Auth0 login
    this.handleAuthCallback();
  }

  /** Login
   *
   * A desired redirect path can be passed to login method (e.g., from a route
   * guard).
   *
   * @param redirectPath A desired redirect path
   */
  public login(redirectPath: string = '/'): void {
    this.auth0Client$.pipe(
      concatMap(client => from(client.loginWithRedirect({
        redirect_uri: `${window.location.origin}`,
        appState: { target: redirectPath }
      })))
    ).subscribe();
  }

  /** Logout */
  public logout() {
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log out
      client.logout({
        client_id: this.options.client_id,
        returnTo: `${window.location.origin}`
      });
    });
  }

  protected handleAuthCallback() {
    // Call when app reloads after user logs in with Auth0
    const params = window.location.search;
    if (params.includes('code=') && params.includes('state=')) {
      let targetRoute: string; // Path to redirect to after login processed
      const authComplete$ = this.handleRedirectCallback$.pipe(
        // Have client, now call method to handle auth callback redirect
        tap(cbRes => {
          // Get and set target redirect route from callback results
          targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
        }),
        concatMap(() =>
          // Redirect callback complete; get login status
          this.isAuthenticated$
        )
      );

      // Subscribe to authentication completion observable
      // Response will be login status
      authComplete$.subscribe(() => {
        // Redirect to target route after callback processing
        window.location.assign(targetRoute);
      });
    }
  }
}
