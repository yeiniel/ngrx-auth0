import { createSelector } from '@ngrx/store';

import { selector } from './selector';
import { State } from '../state';

/** isLoggedIn flag selector */
export const isLoggedInSelector = createSelector(
  selector,
  (state: State) => state.isLoggedIn
);
