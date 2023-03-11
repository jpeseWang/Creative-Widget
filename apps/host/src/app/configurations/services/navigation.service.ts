import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { appConfig } from '../constants';

@Injectable()
export class NavigationService {
	appConfig = appConfig;
	constructor(private router: Router) {}

	loginPage(): void {
		this.router.navigate([`auth/login`]);
	}

	defaultPage(): void {
		this.router.navigate([`/`]);
	}
}
