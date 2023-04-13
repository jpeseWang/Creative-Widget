import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authAction, AuthState } from '../../../../../../../libs/shared/data-access/src/lib/auth';
import { AuthService } from '../../../../../configurations/src/lib/services';
import { UserProfileModel } from '../../../../../model/src/response-model';

@Component({
  selector: 'cwp-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent {

  userProfile!: UserProfileModel | null;
  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router
  ) {
    // get from Session Storage
    this.userProfile = this.authService.currentUserValue.user || null;
    this.isAuthenticated = this.userProfile !== null;
  }

  @Input() bgGray = false;
  showMenu = false;

  logOut(): void {
    this.store.dispatch(authAction.logOutUser());
  }
}
