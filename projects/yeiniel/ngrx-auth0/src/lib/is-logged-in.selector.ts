import { createSelector } from '@ngrx/store';

import { selector } from './selector';
import { State } from './state';

export const isLoggedInSelector = createSelector(
  selector,
  (state: State) => state.isLoggedIn
);
