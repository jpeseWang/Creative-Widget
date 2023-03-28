import { createReducer, on } from '@ngrx/store';

import { UserProfileModel } from 'libs/shared/configurations/model/user.model';
import { authAction } from './auth.action';

export interface AuthState {
  isAuthenticated: boolean;
  userProfile: UserProfileModel;
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
  })
);
