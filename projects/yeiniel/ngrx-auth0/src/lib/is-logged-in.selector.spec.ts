import { featureKey } from './feature-key';
import { isLoggedInSelector } from './is-logged-in.selector';
import { initialState } from './initial-state';

describe('@yeiniel/ngrx-auth0/isLoggedInSelector', () => {

  it('return value of attribute isLoggedIn', () => {
    const state = {
      [featureKey]: initialState
    }

    expect(isLoggedInSelector(state)).toBe(state[featureKey].isLoggedIn);
  });
});
