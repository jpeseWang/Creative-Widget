import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authAction, AuthState } from '../../../../../../../libs/shared/data-access/src/lib/auth';

@Component({
  selector: 'cwp-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  hide = true;
  isValidEmail = true;
  isValidPassword = true;
  isValidConfirmPassword = true;
  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(6)]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.min(6)]),
  });
  constructor(
    private store: Store<AuthState>,
    private router: Router
  ) {}

  register() {
    this.registerForm.get('email')?.status === 'INVALID' ? this.isValidEmail = false : this.isValidEmail = true;
    this.registerForm.get('password')?.status === 'INVALID' ? this.isValidPassword = false : this.isValidPassword = true;
    this.registerForm.get('confirmPassword')?.status === 'INVALID' ? this.isValidConfirmPassword = false : this.isValidConfirmPassword = true;


    console.log(this.registerForm.value);

    if (!this.isValidEmail || !this.isValidPassword || !this.isValidConfirmPassword) {
      return;
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      return;
    }

    this.store.dispatch(authAction.signUpUser({
      email: this.registerForm.value.email?.toString() || "",
      password: this.registerForm.value.password?.toString() || "",
    }));

    // this.authService.(this.registerForm.value.email!, this.registerForm.value.password!).subscribe(
    //   () => {
    //     this.router.navigate(['/']);
    //   }
    // );;
  }
}
