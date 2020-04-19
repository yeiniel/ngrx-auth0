import { createFeatureSelector } from '@ngrx/store';

import { featureKey } from './feature-key';
import { State } from './state';

/** State feature selector */
export const selector = createFeatureSelector<any, State>(featureKey);
