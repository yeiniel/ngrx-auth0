import { featureKey } from './feature-key';
import { selector } from './selector';
import { initialState } from './initial-state';

describe('@yeiniel/ngrx-auth0/selector', () => {

  it('return value of attribute with name `featureKey`', () => {
    const state = {
      [featureKey]: initialState
    }

    expect(selector(state)).toBe(state[featureKey]);
  });
});
