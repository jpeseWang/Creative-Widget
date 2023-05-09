import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { authAction, AuthState } from '../../../../../../../libs/shared/data-access/src/lib/auth';
@Component({
  selector: 'cwp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  isValidEmail = true;
  isValidPassword = true;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(6)]),
  });
  constructor(
    // private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router
  ) {}


  login() {
    this.loginForm.get('email')?.status === 'INVALID' ? this.isValidEmail = false : this.isValidEmail = true;
    this.loginForm.get('password')?.status === 'INVALID' ? this.isValidPassword = false : this.isValidPassword = true;

    if (!this.isValidEmail || !this.isValidPassword) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.store.dispatch(authAction.loginUser({ email: this.loginForm.value.email!, password: this.loginForm.value.password! }));

    // this.store.select(selectUserProfile).subscribe((userProfile) => {
    //   console.log('User profile:', userProfile);
    //   // Use the userProfile data as needed in your component
    // });

    // this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe(
    //   () => {
    //     this.router.navigate(['/']);
    //   }
    // );;
  }

}
