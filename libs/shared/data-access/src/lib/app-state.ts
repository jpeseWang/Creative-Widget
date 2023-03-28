import { RouterReducerState } from '@ngrx/router-store';

import { AuthState } from './auth';


export interface AppState {
  auth: AuthState;
}
