import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const AUTH_ROUTE: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
];

@NgModule({
  declarations: [SignUpComponent, LoginComponent, ForgotPasswordComponent],
  imports: [CommonModule, RouterModule.forChild(AUTH_ROUTE)],
  exports: [SignUpComponent, LoginComponent, ForgotPasswordComponent],
})
export class AuthenticationModule {}
