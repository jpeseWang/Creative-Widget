import { UserProfileModel } from './../../../../configurations/model/user.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '.';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUserProfile = createSelector(
  selectAuthState,
  (state: AuthState): UserProfileModel => {
    return state.userProfile;
  }
);

