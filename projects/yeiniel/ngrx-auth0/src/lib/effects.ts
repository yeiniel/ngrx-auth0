import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { EMPTY, forkJoin } from "rxjs";

import {
  initAction,
  loginAction,
  loginCompleteAction,
  logoutAction
} from './actions';
import { AuthService } from "./auth.service";

@Injectable()
export class Effects implements OnInitEffects {

  /** Side effect for the init action
   *
   * It merges the AuthService.isAuthenticated$ observable and
   * AuthService.getUser$() observable and map them both into the
   * loginComplete Action.
   */
  init$ = createEffect(() => this.actions$.pipe(
    ofType(initAction),
    mergeMap(() => forkJoin([
      this.authService.isAuthenticated$,
      this.authService.profile$
    ]).pipe(
      map(([isAuthenticated, profile]) => loginCompleteAction({
        isLoggedIn: isAuthenticated,
        profile
      })),
      catchError(() => EMPTY)
    ))
  ));

  /** Side effect for the Login action
   *
   * It triggers the initiation of the authentication flow by the Auth0 client
   * service.
   */
  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    tap(() => this.authService.login())
  ), { dispatch: false });

  /** Side effect for the Logout action */
  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logoutAction),
    tap(() => this.authService.logout())
  ), { dispatch: false });

  constructor(protected store: Store,
              protected actions$: Actions,
              protected authService: AuthService) {}

  ngrxOnInitEffects(): Action {
    return initAction();
  }
}
