/**
 * Based on
 * https://github.com/cornflourblue/angular-7-jwt-authentication-example
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ApiService } from '.';
import { TokenModel, UserProfileModel } from '../model';

export interface ApplicationUser {
  token: TokenModel;
  user?: UserProfileModel;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<ApplicationUser>;
  public currentUser: Observable<ApplicationUser>;

  constructor(
    private apiServices: ApiService,
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<ApplicationUser>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): ApplicationUser {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.apiServices.post<any>('auth/login', { email, password }, false).pipe(map((auth) => {
      if (auth.data) {
        localStorage.setItem('currentUser', JSON.stringify(auth.data));
        localStorage.setItem('token', auth.data.token.accessToken);
        localStorage.setItem('refreshToken', auth.data.token.refreshToken);
        this.currentUserSubject.next(auth.data);
      }
    })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    const userEmpty: ApplicationUser = {
      token: {
        accessToken: '',
        refreshToken: '',
        expiresIn: 0,
      },
      user: {
        email: '',
        role: '',
      }
    };
    this.currentUserSubject.next(userEmpty);
    this.router.navigate(['auth/login']);
  }

  refreshToken() {
    return this.apiServices.post<any>(`auth/refresh-token`, null, true)
      .pipe(map((auth) => {
        if (auth.data) {
          localStorage.removeItem('currentUser');
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          const refreshUser: ApplicationUser = {
            token: {
              accessToken: auth.data.accessToken,
              refreshToken: auth.data.refreshToken,
              expiresIn: 3600,
            },
            user: {
              email: this.currentUserValue.user?.email!,
              role: this.currentUserValue.user?.role!,
            }
          };
          localStorage.setItem('token', auth.data.accessToken);
          localStorage.setItem('refreshToken', auth.data.refreshToken);
          localStorage.setItem('currentUser', JSON.stringify(refreshUser));
          this.currentUserSubject.next(refreshUser);
          return auth.data.accessToken;
        }
      }));
  }
}
