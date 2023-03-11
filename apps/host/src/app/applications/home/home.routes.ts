import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.page';

export const HOME_ROUTES: Routes = [
	{
		path: '',
		pathMatch: 'prefix',
		component: HomeComponent,
	},
];
