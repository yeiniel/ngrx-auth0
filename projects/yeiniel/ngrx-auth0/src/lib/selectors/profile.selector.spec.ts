import { featureKey } from '../feature-key';
import { initialState } from '../initial-state';
import { profileSelector } from './profile.selector';

describe('@yeiniel/ngrx-auth0/profileSelector', () => {

  it('return value of attribute profile', () => {
    const state = {
      [featureKey]: initialState
    }

    expect(profileSelector(state)).toBe(state[featureKey].profile);
  });
});
