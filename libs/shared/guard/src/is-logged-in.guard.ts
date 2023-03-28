import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService, NavigationService } from '../configurations/services';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,

    private helper: JwtHelperService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    const isExpired = this.helper.isTokenExpired(currentUser?.token?.refreshToken);

    if (isExpired) {
      // localStorage.removeItem('currentUser');
      // localStorage.removeItem('token');
      // localStorage.removeItem('refreshToken');
      return true;
    }

    this.navigationService.defaultPage();
    // not logged in so redirect to login page with the return url
    return true;
  }
}
