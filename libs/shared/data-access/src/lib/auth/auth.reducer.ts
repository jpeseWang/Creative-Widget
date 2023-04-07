import { UserProfileModel } from '@cwp/shared/model/response';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

import { authAction } from './auth.action';

export const AUTH_STORE_FEATURE_KEY = 'auth';

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

  on(authAction.loginUserSuccess, (state, { userProfile }): AuthState => {
    console.log('loginUserSuccess', userProfile);
    // Save userProfile to session storage
    sessionStorage.setItem('userProfile', JSON.stringify(userProfile));

    return {
      ...state,
      isAuthenticated: true,
      userProfile,
    };
  }),
);

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectToken = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.userProfile
);
