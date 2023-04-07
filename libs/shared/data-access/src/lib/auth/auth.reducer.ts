import { UserProfileModel } from '@cwp/shared/model/response';
import { createReducer, on } from '@ngrx/store';

import { authAction } from './auth.action';

export const AUTH_STORE_FEATURE_KEY = 'auth';

export interface AuthState {
  isAuthenticated: boolean;
  userProfile: UserProfileModel | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userProfile: null,
  token: null,
};

export const authReducer = createReducer(
  initialState,

  on(authAction.getUserProfile, (state): AuthState => {
    return {
      ...state,
    };
  }),
  on(authAction.getUserProfileSuccess, (state, { userProfile }): AuthState => {
    // Save userProfile to session storage
    sessionStorage.setItem('userProfile', JSON.stringify(userProfile));


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

  on(authAction.loginUserSuccess, (state, { userProfile, token, isAuthenticated }): AuthState => {
    console.log('loginUserSuccess', userProfile);
    // Save userProfile to session storage
    sessionStorage.setItem('userProfile', JSON.stringify(userProfile));
    sessionStorage.setItem('token', JSON.stringify(token));
    sessionStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));

    return {
      ...state,
      isAuthenticated: true,
      userProfile,
    };
  }),
);
