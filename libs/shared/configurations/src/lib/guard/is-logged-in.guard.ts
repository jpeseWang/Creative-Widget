import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';
import { NavigationService } from '../services/navigation.service';

@Injectable()
export class IsLoggedInGuard {
  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,

    private helper: JwtHelperService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.helper.tokenGetter = () => {
      const currentUser = this.authService.currentUserValue;
      return currentUser?.token?.refreshToken;
    };
    console.log('IsLoggedInGuard');
    const currentUser = this.authService.currentUserValue;
    console.log('currentUser', currentUser?.token?.refreshToken);
    console.log(this.helper.getTokenExpirationDate(currentUser?.token?.refreshToken.trim()));
    const expirationDate = this.helper.getTokenExpirationDate(currentUser?.token?.refreshToken.trim());
    console.log('expirationDate', expirationDate);
    console.log('new Date()', new Date());
    if (expirationDate && expirationDate > new Date()) {
      return true;
    }


    // if (isExpired) {
    // localStorage.removeItem('currentUser');
    // localStorage.removeItem('token');
    // localStorage.removeItem('refreshToken');
    // return true;
    // }

    this.navigationService.defaultPage();
    // not logged in so redirect to login page with the return url
    return true;
  }
}
