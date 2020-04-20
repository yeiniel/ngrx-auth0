import { createAction } from '@ngrx/store';

import { featureKey } from '../feature-key';

export const logoutAction = createAction(
  `[${featureKey}] Logout`
);

