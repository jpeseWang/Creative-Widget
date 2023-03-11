import { Routes } from '@angular/router';
import { TradeComponent } from './trade.component';

export const TRADE_ROUTES: Routes = [
	{
		path: '',
		component: TradeComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'search',
			},
			{
				path: 'search',
				canActivate: [],
				loadChildren: () =>
					import('./pages/search/search.module').then(m => m.SearchModule),
			},
			{
				path: 'exchange',
				canActivate: [],
				loadChildren: () =>
					import('./pages/exchange/exchange.module').then(m => m.ExchangeModule),
			},
		],
	},
];
