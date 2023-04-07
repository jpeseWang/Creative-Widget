import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { authAction } from '.';
import { AppState } from '..';
import { AuthService } from '../../../../configurations/src/lib/services';


@Injectable()
export class AuthEffect {
  // checkAuthentication$ = createEffect(() => {
  //   return this.authService.user$.pipe(
  //     filter((user) => !!user),
  //     switchMap((user: User) =>
  //       this.authService.getAccessTokenSilently().pipe(
  //         take(1),
  //         tap((token) => localStorage.setItem('token', token)),
  //         mapTo(user)
  //       )
  //     ),
  //     switchMap((user: User) => [
  //       authAction.getUserProfile(),
  //     ])
  //   );
  // });
  loginUser$ = createEffect(() => {

    console.log('vao day');
    return this.actions$.pipe(
      ofType(authAction.loginUser),
      switchMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((res: any) => {
            const userProfile = res?.data?.getUserProfileByAuth0Id;
            console.log(userProfile);
            return userProfile;
          }

          )

        );
      })
    );
  }
  );

  // getUserProfile$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(authAction.getUserProfile),
  //     withLatestFrom(this.store.select(authSelector.selectAuth0Profile)),
  //     switchMap(([, auth0Profile]) => {
  //       return this.userService.getUserProfileByAuth0Id(auth0Profile.sub).pipe(
  //         map((res: any) => {
  //           const userProfile = res?.data?.getUserProfileByAuth0Id;
  //           userProfile.adminOrganizations =
  //             userProfile.adminOrganizations.filter((id) => id);

  //           if (userProfile.adminOrganizations.length === 0) {
  //             return { userProfile: null, auth0Profile };
  //           }
  //           return { userProfile, auth0Profile };
  //         }),
  //         catchError(() => of({ userProfile: null, auth0Profile }))
  //       );
  //     }),
  //     switchMap(({ userProfile, auth0Profile }) => {
  //       if (!userProfile) {
  //         return this.userService.getInviteByEmail(auth0Profile.email).pipe(
  //           map((res: any) => ({
  //             userProfile,
  //             auth0Profile,
  //             inviteUser: res?.data?.getInviteByEmail,
  //           }))
  //         );
  //       }
  //       return of({ userProfile, auth0Profile, inviteUser: null });
  //     }),
  //     tap(({ userProfile, inviteUser }) => {
  //       if (!userProfile && !inviteUser)
  //         this.authService.logout({ returnTo: window.location.origin });
  //     }),
  //     switchMap(({ userProfile, auth0Profile, inviteUser }) => {
  //       if (!userProfile) {
  //         inviteUser as UserInviteModel;
  //         const userProfileUpdated: UserProfileInput = {
  //           userProfileId: inviteUser.user_profile_id,
  //           auth0Id: auth0Profile.sub,
  //           emailAddress: inviteUser.email_address,
  //           firstName: '',
  //           zipCode: '',
  //           primaryLanguage: '',
  //         };

  //         const saveProfileRequest =
  //           this.userService.updateUserProfile(userProfileUpdated);

  //         const deleteInvitationRequest = this.userService.deleteInvitation(
  //           inviteUser.id
  //         );
  //         return forkJoin([saveProfileRequest, deleteInvitationRequest]).pipe(
  //           map(() =>
  //             authAction.getUserProfileSuccess({
  //               userProfile: convertToUserProfileModel({
  //                 ...userProfileUpdated,
  //                 updatedAt: '',
  //                 isSuperAdmin: false,
  //                 adminOrganizations: [],
  //               }),
  //             })
  //           )
  //         );
  //       }
  //       return of(
  //         authAction.getUserProfileSuccess({
  //           userProfile: convertToUserProfileModel(userProfile),
  //         })
  //       );
  //     }),
  //     catchError((error) => of(authAction.getUserProfileError({ error })))
  //   )
  // );

  // updateUserProfile$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(authAction.updateUserProfile),
  //     withLatestFrom(this.store.select(authSelector.selectAuth0Profile)),
  //     switchMap(([{ userProfile }, auth0Profile]) => {
  //       const userProfileUpdated: UserProfileInput = {
  //         userProfileId: userProfile.id,
  //         auth0Id: auth0Profile.sub,
  //         firstName: userProfile.name,
  //         emailAddress: userProfile.email,
  //         zipCode: userProfile.zipCode,
  //       };

  //       return this.userService.updateUserProfile(userProfileUpdated).pipe(
  //         map(() => {
  //           this.dialog.open(NotifyDialogComponent, {
  //             panelClass: 'xp-dialog-confirm',
  //             data: {
  //               title: 'Your changes have been successfully saved',
  //               message: '',
  //             },
  //             width: '782px',
  //           });

  //           return authAction.updateUserProfileSuccess({
  //             userProfile,
  //           });
  //         }),
  //         catchError((error) =>
  //           of(authAction.updateUserProfileError({ error }))
  //         )
  //       );
  //     })
  //   )
  // );

  constructor(
    private actions$: Actions,

    private authService: AuthService,
    private store: Store<AppState>
  ) {}
}
