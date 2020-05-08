import { Action } from '@ngrx/store';

import { initialState } from './initial-state';
import { reducer } from './reducer';
import { loginCompleteAction } from './actions';

describe('@yeiniel/ngrx-auth0/reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {};
      const state = reducer(undefined, action as Action);

      expect(state).toBe(initialState);
    });
  });

  describe('loginComplete action', () => {
    it('should set isLoggedIn to value', () => {
      let action = loginCompleteAction({ isLoggedIn: true });
      let state = reducer(initialState, action);

      expect(state.isLoggedIn).toEqual(true);

      action = loginCompleteAction({ isLoggedIn: false });
      state = reducer(initialState, action);

      expect(state.isLoggedIn).toEqual(false);
    });

    it('should set profile to value', () => {
      const profile = {};
      let action = loginCompleteAction({ isLoggedIn: true, profile });
      let state = reducer(initialState, action);

      expect(state.profile).toEqual(profile);

      action = loginCompleteAction({ isLoggedIn: false, profile: undefined });
      state = reducer(initialState, action);

      expect(state.profile).toEqual(undefined);
    });
  });
});
