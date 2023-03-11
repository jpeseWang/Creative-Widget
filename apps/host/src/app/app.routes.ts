import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
	{
		path: '',
		loadChildren: () => import('./applications/home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'trade',
		loadChildren: () => import('./applications/trade/trade.module').then(m => m.TradeModule),
	},
	{
		path: 'account',
		loadChildren: () =>
			import('./applications/account/account.module').then(m => m.AccountModule),
	},
	{
		path: 'admin',
		loadChildren: () => import('./applications/admin/admin.module').then(m => m.AdminModule),
	},
	{
		path: '**',
		loadChildren: () =>
			import('@cwp/shared/components/page-not-found').then(m => m.NotFoundPageModule),
	},
];
