import { InjectionToken } from '@angular/core';

export const AuthServiceOptions =
  new InjectionToken<Auth0ClientOptions>('AuthServiceOptions');
