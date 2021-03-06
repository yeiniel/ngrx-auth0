import { createAction } from '@ngrx/store';

import { featureKey } from '../feature-key';

/** Login
 *
 * This action is dispatched by the application using this module to initiate
 * the user authentication workflow.
 *
 * It does not produce any change on the stored state but it trigger side
 * effects.
 */
export const loginAction = createAction(
  `[${featureKey}] Login`
);
