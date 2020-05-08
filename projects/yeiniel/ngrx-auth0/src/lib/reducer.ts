import { Action, createReducer, on } from '@ngrx/store';

import { initialState } from './initial-state';
import { State } from './state';
import { loginCompleteAction } from './actions';

/** NgRx Store reducer for the module feature */
const actionReducer = createReducer(
  initialState,
  on(loginCompleteAction,
    (state, { isLoggedIn, profile }) =>
      ({ ...state, isLoggedIn, profile })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return actionReducer(state, action)
}
