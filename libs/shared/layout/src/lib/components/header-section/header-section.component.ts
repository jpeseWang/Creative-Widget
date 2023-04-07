/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../../../../libs/shared/data-access/src/lib/auth';
import { selectUserProfile } from '../../../../../data-access/src/lib/auth/auth.selector';
import { UserProfileModel } from '../../../../../model/src/response-model';

@Component({
  selector: 'cwp-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent {

  userProfile: UserProfileModel | null = null;

  isAuthenticated = false;

  constructor(
    // private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router
  ) {
    console.log('123123', this.isAuthenticated);
    this.store.select(selectUserProfile).subscribe((userProfile) => {
      // console.log('Header Section', userProfile);
      this.userProfile = userProfile;
      this.isAuthenticated = userProfile !== null;
      console.log('Header Section', this.isAuthenticated);
      // Use the userProfile data as needed in your component
    });
  }

  @Input() bgGray = false;
  showMenu = false;
}
