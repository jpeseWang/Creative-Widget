import { Routes } from '@angular/router';

export const APP_MAINTENANCE_ROUTES: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('@cwp/shared/components/maintenance').then(m => m.MaintenanceModule),
	},
	{
		path: '**',
		loadChildren: () =>
			import('@cwp/shared/components/maintenance').then(m => m.MaintenanceModule),
	},
];
