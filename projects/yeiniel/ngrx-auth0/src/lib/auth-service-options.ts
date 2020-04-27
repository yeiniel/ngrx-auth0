import { InjectionToken } from '@angular/core';
import { Auth0ClientOptions } from '@auth0/auth0-spa-js';

export const AuthServiceOptions =
  new InjectionToken<Auth0ClientOptions>('AuthServiceOptions');
