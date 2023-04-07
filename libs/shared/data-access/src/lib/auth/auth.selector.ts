import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserProfileModel } from '@cwp/shared/model/response';
import { AuthState } from '.';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUserProfile = createSelector(
  selectAuthState,
  (state: AuthState): UserProfileModel | null => {
    return state.userProfile;
  }
);
