import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { featureKey } from './feature-key';
import { reducer } from './reducer';
import { Effects } from './effects';
import { AuthService } from './auth.service';
import { AuthServiceOptions } from './auth-service-options';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([Effects])
  ],
  exports: []
})
export class NgrxAuth0Module {

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
