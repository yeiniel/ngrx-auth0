import { createAction } from '@ngrx/store';

import { featureKey } from './feature-key';

export const initAction = createAction(
  `[${featureKey}] Init`
);

