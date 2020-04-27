import { createSelector } from '@ngrx/store';

import { selector } from './selector';
import { State } from '../state';

/** User profile selector */
export const profileSelector = createSelector(
  selector,
  (state: State) => state.profile
);
