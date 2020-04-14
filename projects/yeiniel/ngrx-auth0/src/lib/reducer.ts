import {Action, createReducer} from '@ngrx/store';

import { initialState } from './initial-state';
import { State } from './state';

/** NgRx Store reducer for the module feature */
const actionReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return actionReducer(state, action)
}
