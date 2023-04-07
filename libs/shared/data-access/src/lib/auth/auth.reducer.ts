import { UserProfileModel } from '@cwp/shared/model/response';
import { createReducer, on } from '@ngrx/store';

import { authAction } from './auth.action';

export interface AuthState {
  isAuthenticated: boolean;
  userProfile: UserProfileModel | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userProfile: null,
};

export const authReducer = createReducer(
  initialState,

  on(authAction.getUserProfile, (state): AuthState => {
    return {
      ...state,
    };
  }),
  on(authAction.getUserProfileSuccess, (state, { userProfile }): AuthState => {
    return {
      ...state,
      isAuthenticated: true,
      userProfile,
    };
  }),

  on(authAction.loginUser, (state): AuthState => {
    return {
      ...state,
    };
  }),

);
