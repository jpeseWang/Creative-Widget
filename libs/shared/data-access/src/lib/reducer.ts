import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../configurations/environments/environment';
import { AppState } from './app-state';
import { authReducer } from './auth';
import { logger } from './meta-reducers/logger';


export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,

};

export const metaReducers: MetaReducer<AppState>[] =
  environment.production && !environment.debug ? [] : [logger];
