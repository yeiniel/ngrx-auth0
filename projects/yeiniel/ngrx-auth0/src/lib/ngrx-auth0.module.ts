import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { featureKey } from './feature-key';
import { reducer } from './reducer';
import { Effects } from './effects';
import { AuthService } from './auth.service';
import { AuthServiceOptions } from './auth-service-options';

/** NgrxAuth0 Angular Module
 *
 * Provide authentication using [Auth0](https://auth0.com) and implements its
 * interface in the form of an NgRx store feature.
 */
@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([Effects])
  ],
  exports: []
})
export class NgrxAuth0Module {

  /** NgrxAuth0Module with Providers
   *
   * Suitable to be used as root module import.
   *
   * @param options
   */
  static forRoot(options: any): ModuleWithProviders {
    return {
      ngModule: NgrxAuth0Module,
      providers: [
        { provide: AuthServiceOptions, useValue: options },
       AuthService
      ]
    }
  }

  constructor (@Optional() @SkipSelf() parentModule?: NgrxAuth0Module) {
    if (parentModule) {
      throw new Error(
        'NgrxAuth0Module is already loaded. Import it in the AppModule only');
    }
  }
}
