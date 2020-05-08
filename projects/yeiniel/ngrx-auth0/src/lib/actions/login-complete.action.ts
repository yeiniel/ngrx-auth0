import { createAction, props } from '@ngrx/store';

import { featureKey } from '../feature-key';

/** Login
 *
 * This action is dispatched by the init effect implemented by this module to
 * update the feature state.
 */
export const loginCompleteAction = createAction(
  `[${featureKey}] Login Complete`,
  props<{ isLoggedIn: boolean, profile?: any }>()
);
