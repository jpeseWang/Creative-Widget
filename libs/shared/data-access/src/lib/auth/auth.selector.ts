import { createSelector } from '@ngrx/store';

import { UserProfileModel } from '@cwp/shared/model/response';
import { AuthState } from '.';
import { AppState } from '..';

const selectAuthState = (state: AppState) => state.auth;

export const selectUserProfile = createSelector(
  selectAuthState,
  (state: AuthState): UserProfileModel | null => {
    return state.userProfile;
  }
);
