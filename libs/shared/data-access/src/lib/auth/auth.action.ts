import { createAction, props } from '@ngrx/store';
import { UserProfileModel } from 'libs/shared/configurations/model/user.model';


export const authAction = {
  // checkAuthenticationWithAuth0Success: createAction(
  //   '[Auth] Check Authentication With Auth0 Success',
  //   props<{ auth0Profile: User }>()
  // ),

  getUserProfile: createAction('[Auth] Get User Profile'),
  getUserProfileSuccess: createAction(
    '[Auth] Get User Profile Success',
    props<{ userProfile: UserProfileModel }>()
  ),
  getUserProfileError: createAction(
    '[Auth] Get User Profile Error',
    props<{ error: any }>()
  ),

  // updateUserProfile: createAction(
  //   '[Auth] Update User Profile',
  //   props<{ userProfile: UserProfileModel }>()
  // ),
  // updateUserProfileSuccess: createAction(
  //   '[Auth] Update User Profile Success',
  //   props<{ userProfile: UserProfileModel }>()
  // ),
  // updateUserProfileError: createAction(
  //   '[Auth] Update User Profile Error',
  //   props<{ error: any }>()
  // ),

  // updateUserRole: createAction(
  //   '[Auth] Update User Role',
  //   props<{ userRole: UserRole }>()
  // ),
};
