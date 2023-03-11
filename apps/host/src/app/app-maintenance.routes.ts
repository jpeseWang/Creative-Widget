import { Routes } from '@angular/router';

export const APP_MAINTENANCE_ROUTES: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('@dgm/shared/components/maintenance').then(m => m.MaintenanceModule),
	},
	{
		path: '**',
		loadChildren: () =>
			import('@dgm/shared/components/maintenance').then(m => m.MaintenanceModule),
	},
];
