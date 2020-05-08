import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { Injectable } from '@angular/core';
import { Auth0ClientOptions } from "@auth0/auth0-spa-js";

import { AuthService } from './auth.service';
import { AuthServiceOptions } from './auth-service-options';

@Injectable()
class TestableAuthService extends AuthService {
  /** Return the service Auth0Client$ observable */
  public getAuth0Client$(): Observable<Auth0Client> {
    return this.auth0Client$;
  }
}

describe('@yeiniel/ngrx-auth0/AuthService', () => {
  let options: Auth0ClientOptions;
  let service: TestableAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthServiceOptions, useValue: {} },
        { provide: AuthService, useClass: TestableAuthService }
      ]
    });

    service = TestBed.inject(AuthService) as TestableAuthService;
    options = TestBed.inject(AuthServiceOptions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('auth0Client$.options is AuthServiceOptions', (doneFn) => {
    service.getAuth0Client$().subscribe(auth0Client => {

      expect((auth0Client as any).options).toBe(options);

      doneFn();
    })
  });

  it('isAuthenticated$ calls auth0Client$.isAuthenticated()', (doneFn) => {
    service.getAuth0Client$().subscribe(auth0Client => {

      const isAuthenticatedSpy =
        spyOn(auth0Client, 'isAuthenticated')
          .and.callFake(() => Promise.resolve(true));

      service.isAuthenticated$.subscribe(() => {
        expect(isAuthenticatedSpy).toHaveBeenCalledTimes(1);

        // reset spy
        isAuthenticatedSpy.and.callThrough();

        doneFn();
      });
    })
  });

  it('profile$ calls auth0Client$.getUser()', (doneFn) => {
    const profile = {};

    service.getAuth0Client$().subscribe(auth0Client => {

      const getUserSpy =
        spyOn(auth0Client, 'getUser')
          .and.callFake(() => Promise.resolve(profile));

      service.profile$.subscribe(observedProfile => {
        expect(getUserSpy).toHaveBeenCalledTimes(1);
        expect(observedProfile).toBe(profile);

        // reset spy
        getUserSpy.and.callThrough();

        doneFn();
      });
    })
  });

  it('login calls auth0Client$.loginWithRedirect()', (doneFn) => {
    service.getAuth0Client$().subscribe(auth0Client => {

      const loginWithRedirectSpy =
        spyOn(auth0Client, 'loginWithRedirect')
          .and.callFake(() => Promise.resolve());

      service.login();

      expect(loginWithRedirectSpy).toHaveBeenCalledTimes(1);

      // reset spy
      loginWithRedirectSpy.and.callThrough();

      doneFn();
    })
  });

  it('logout calls auth0Client$.logout()', (doneFn) => {
    service.getAuth0Client$().subscribe(auth0Client => {

      const logoutSpy =
        spyOn(auth0Client, 'logout')
          .and.callFake(() => undefined);

      service.logout();

      expect(logoutSpy).toHaveBeenCalledTimes(1);

      // reset spy
      logoutSpy.and.callThrough();

      doneFn();
    })
  });
});
