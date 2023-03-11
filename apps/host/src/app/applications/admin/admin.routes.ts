import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const ADMIN_ROUTES: Routes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'dashboard',
			},
			{
				path: 'dashboard',
				canActivate: [],
				loadChildren: () =>
					import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
			},
			{
				path: 'account-management',
				canActivate: [],
				loadChildren: () =>
					import('./pages/account-management/account-management.module').then(
						m => m.AccountmanagementModule
					),
			},
		],
	},
];
