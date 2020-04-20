import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Effects } from './effects';
import { AuthService } from './auth.service';
import { initAction } from "./init.action";
import { loginAction } from "./login.action";
import { logoutAction } from './logout.action';

@Injectable()
class AuthServiceMock {
  isAuthenticated$ = of(false);

  login() {}

  logout() {}
}

@Injectable()
class EffectsWithoutInit extends Effects {
  ngrxOnInitEffects(): Action {
    return undefined;
  }
}

describe('@yeiniel/ngrx-auth0/Effects', () => {
  let actions$: Observable<any>;
  let effects: Effects;
  let authService: AuthServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: Effects, useClass: EffectsWithoutInit },
        provideMockStore({ initialState: {} }),
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<Effects>(Effects);
    authService = TestBed.inject(AuthService) as AuthServiceMock;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('init effect pipes AuthService.isAuthenticated$ and dispatch loginCompleteAction', () => {
    actions$ = of(initAction());

    // create a spy to verify that AuthService.login() is being called
    const pipeSpy = spyOn(authService.isAuthenticated$, 'pipe');

    // subscribe to execute the Effect
    effects.init$.subscribe();

    // verify verify that AuthService.login() is being called
    expect(pipeSpy).toHaveBeenCalledTimes(1);

    // reset spy
    pipeSpy.and.callThrough();
  });

  it('login$ effect calls AuthService.login() on login action', () => {
    actions$ = of(loginAction());

    // create a spy to verify that AuthService.login() is being called
    const loginSpy = spyOn(authService, 'login');


    // subscribe to execute the Effect
    effects.login$.subscribe();

    // verify verify that AuthService.login() is being called
    expect(loginSpy).toHaveBeenCalledTimes(1);

    // reset spy
    loginSpy.and.callThrough();
  });

  it('logout$ effect calls AuthService.logout() on logout action', () => {
    actions$ = of(logoutAction());

    // create a spy to verify that AuthService.login() is being called
    const logoutSpy = spyOn(authService, 'logout');


    // subscribe to execute the Effect
    effects.logout$.subscribe();

    // verify verify that AuthService.login() is being called
    expect(logoutSpy).toHaveBeenCalledTimes(1);

    // reset spy
    logoutSpy.and.callThrough();
  });
});
