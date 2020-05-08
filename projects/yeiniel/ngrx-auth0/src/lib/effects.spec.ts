import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of, ReplaySubject, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Effects } from './effects';
import { AuthService } from './auth.service';
import { initAction, loginAction, logoutAction, loginCompleteAction } from "./actions";

@Injectable()
class AuthServiceMock {
  protected profile: any;

  constructor() {
    this.profile = {};
  }

  get isAuthenticated$() {
    return of(false);
  }

  get profile$() {
    return of(this.profile);
  }

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
    actions$ = new ReplaySubject<Action>(1);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: Effects, useClass: EffectsWithoutInit },
        provideMockStore({ initialState: {} }),
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<Effects>(Effects);
    authService = TestBed.inject(AuthService) as any as AuthServiceMock;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('init effect emit loginComplete action', (doneFn) => {
    // subscribe to execute the Effect
    effects.init$.subscribe(action => {
      console.log(action);
      
      expect(action.type).toBe(loginCompleteAction({ isLoggedIn: true }).type);

      doneFn();
    });

    // trigger the efect using the action it is targeting
    (actions$ as ReplaySubject<Action>).next(initAction());
  });

  it('init effect action.profile is authService.profile$', (doneFn) => {
    // subscribe to execute the Effect
    forkJoin([
      authService.profile$,
      effects.init$
    ]).subscribe(([profile, action]) => {
      expect(action.profile).toBe(profile);

      doneFn();
    });
    
    // trigger the efect using the action it is targeting
    (actions$ as ReplaySubject<Action>).next(initAction());
    (actions$ as ReplaySubject<Action>).complete();
  });

  it('init effect action.isLoggedIn is authService.isAuthenticated$', (doneFn) => {
    // subscribe to execute the Effect
    forkJoin([
      authService.isAuthenticated$,
      effects.init$
    ]).subscribe(([isAuthenticated, action]) => {
      expect(action.isLoggedIn).toBe(isAuthenticated);

      doneFn();
    });
    
    // trigger the efect using the action it is targeting
    (actions$ as ReplaySubject<Action>).next(initAction());
    (actions$ as ReplaySubject<Action>).complete();
  });

  it('login$ effect calls AuthService.login() on login action', (doneFn) => {
    // actions$ = of(loginAction());

    // create a spy to verify that AuthService.login() is being called
    const loginSpy = spyOn(authService, 'login');


    // subscribe to execute the Effect
    effects.login$.subscribe(action => {
      // verify verify that AuthService.login() is being called
      expect(loginSpy).toHaveBeenCalledTimes(1);

      // reset spy
      loginSpy.and.callThrough();
      
      doneFn();

    });

    (actions$ as ReplaySubject<Action>).next(loginAction());
  });

  it('logout$ effect calls AuthService.logout() on logout action', (doneFn) => {
    // actions$ = of(logoutAction());

    // create a spy to verify that AuthService.login() is being called
    const logoutSpy = spyOn(authService, 'logout');


    // subscribe to execute the Effect
    effects.logout$.subscribe(action => {
      // verify verify that AuthService.login() is being called
      expect(logoutSpy).toHaveBeenCalledTimes(1);

      // reset spy
      logoutSpy.and.callThrough();

      doneFn();
    });

    (actions$ as ReplaySubject<Action>).next(logoutAction());
  });
});
