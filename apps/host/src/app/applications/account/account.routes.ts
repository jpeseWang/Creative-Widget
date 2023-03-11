import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';

export const ACCOUNT_ROUTES: Routes = [
	{
		path: '',
		component: AccountComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'profile',
			},
			{
				path: 'profile',
				canActivate: [],
				loadChildren: () =>
					import('./pages/account-profile/account-profile.module').then(
						m => m.AccountProfileModule
					),
			},
			{
				path: 'history',
				canActivate: [],
				loadChildren: () =>
					import('./pages/account-history/account-history.module').then(
						m => m.AccountHistoryModule
					),
			},
			{
				path: 'profile/:id',
				canActivate: [],
				loadChildren: () =>
					import('./pages/view-account-profile/view-account-profile.module').then(
						m => m.ViewAccountProfileModule
					),
			},
		],
	},
];
