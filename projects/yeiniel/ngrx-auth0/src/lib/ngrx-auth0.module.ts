import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { featureKey } from './feature-key';
import { reducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(featureKey, reducer)
  ],
  exports: []
})
export class NgrxAuth0Module { }
