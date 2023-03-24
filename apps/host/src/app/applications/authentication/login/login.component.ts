import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../../libs/shared/configurations/services/auth.service';
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
    private authService: AuthService,
    private router: Router
  ) {}


  login() {
    this.loginForm.get('email')?.status === 'INVALID' ? this.isValidEmail = false : this.isValidEmail = true;
    this.loginForm.get('password')?.status === 'INVALID' ? this.isValidPassword = false : this.isValidPassword = true;

    if (!this.isValidEmail || !this.isValidPassword) {
      return;
    }

    this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe(
      () => {
        this.router.navigate(['/']);
      }
    );;
  }

}
