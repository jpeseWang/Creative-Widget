import { UserProfileModel } from '@cwp/shared/model/response';
import { createAction, props } from '@ngrx/store';


export const authAction = {
  // checkAuthenticationWithAuth0Success: createAction(
  //   '[Auth] Check Authentication With Auth0 Success',
  //   props<{ auth0Profile: User }>()
  // ),

  loginUser: createAction('[Auth] Login User',

    props<{ email: string; password: string; }>()
  ),

  loginUserSuccess: createAction(
    '[Auth] Login User Success',
    props<{ userProfile: UserProfileModel; token: string; isAuthenticated: boolean; }>()
  ),

  loginUserFailure: createAction(
    '[Auth] Login User Error',
    props<{ error: any; }>()
  ),

  getUserProfile: createAction('[Auth] Get User Profile'),
  getUserProfileSuccess: createAction(
    '[Auth] Get User Profile Success',
    props<{ userProfile: UserProfileModel; }>()
  ),
  getUserProfileError: createAction(
    '[Auth] Get User Profile Error',
    props<{ error: any; }>()
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
