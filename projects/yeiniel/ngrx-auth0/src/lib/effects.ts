import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { EMPTY } from "rxjs";

import { loginAction } from './login.action';
import { logoutAction } from './logout.action';
import { loginCompleteAction } from "./login-complete.action";
import { AuthService } from "./auth.service";
import { initAction } from './init.action';

@Injectable()
export class Effects implements OnInitEffects {

  /** Side effect for the init action
   *
   * It merges the AuthService.isAuthenticated$ observable and map it into the
   * loginComplete Action.
   */
  init$ = createEffect(() => this.actions$.pipe(
    ofType(initAction),
    mergeMap(() => this.authService.isAuthenticated$.pipe(
      map(isAuthenticated => loginCompleteAction({
        isLoggedIn: isAuthenticated
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
