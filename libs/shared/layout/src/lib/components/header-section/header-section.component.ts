/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { authAction, AuthState } from '../../../../../../../libs/shared/data-access/src/lib/auth';
import { selectUserProfile } from '../../../../../data-access/src/lib/auth/auth.selector';
import { UserProfileModel } from '../../../../../model/src/response-model';

@Component({
  selector: 'cwp-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent {

  userProfile$: Observable<UserProfileModel | null>; // Replace `any` with the type of your user profile data
  isAuthenticated$: Observable<boolean>;

  constructor(
    // private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router
  ) {
    this.userProfile$ = this.store.select(selectUserProfile);
    this.isAuthenticated$ = this.userProfile$.pipe(map(userProfile => userProfile !== null));
  }

  @Input() bgGray = false;
  showMenu = false;

  logOut(): void {
    this.store.dispatch(authAction.logOutUser());
  }
}
