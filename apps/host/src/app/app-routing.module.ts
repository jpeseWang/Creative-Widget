import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '@cwp/shared/pages/error-page';
import { MaintenacePageComponent } from '@cwp/shared/pages/maintenance-page';
import { PermissionPageComponent } from '@cwp/shared/pages/permission-page';
import { AboutUsComponent } from './applications/pages/about-us/about-us.component';
import { FeaturesComponent } from './applications/pages/features/features.component';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@cwp/remotes-app/home').then(m => m.RemotesAppHomeModule)
    },
    {
        path: 'auth',
        canActivate: [],
        loadChildren: () => import('./applications/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'marketplace',
        canActivate: [],
        loadChildren: () => import('@cwp/remotes-app/marketplace').then(m => m.RemotesAppMarketplaceModule)
    },
    {
        path: 'community',
        canActivate: [],
        loadChildren: () => import('@cwp/remotes-app/community').then(m => m.RemotesAppCommunityModule)
    },
    {
        path:'dashboard',
        canActivate: [],
        loadChildren: () => import('@cwp/remotes-app/dashboard').then(m => m.RemotesAppDashboardModule)
    },
    {
        path: 'features',
        canActivate: [],
        component: FeaturesComponent
    },
    {
        path: 'about-us',
        canActivate: [],
        component: AboutUsComponent
    },
    {
        path: 'customer-support',
        canActivate: [],
        loadChildren: () => import('@cwp/remotes-app/customer-support').then(m => m.RemotesAppCustomerSupportModule)
    },
    {
        path: 'admin',
        canActivate: [],
        loadChildren: () => import('@cwp/remotes-app/admin').then(m => m.RemotesAppAdminModule)
    },
    {
        path: 'page',
        canActivate: [],
        loadChildren: () => import('@cwp/remotes-app/page').then(m => m.RemotesAppPageModule)
    },
    {
        path: 'account',
        canActivate: [],
        loadChildren: () => import('@cwp/remotes-app/account').then(m => m.RemotesAppAccountModule)
    },
    {
        path: 'error',
        pathMatch: 'full',
        component: ErrorPageComponent,
    },
    {
        path: 'permission-denied',
        pathMatch: 'full',
        canActivate: [],
        component: PermissionPageComponent
    },
    {
        path: 'maintenance',
        pathMatch: 'full',
        component: MaintenacePageComponent
    },
    {
        path: 'design-system',
        canActivate: [],
        loadChildren: () => import('@cwp/remotes-app/design-system').then(m => m.RemotesAppDesignSystemModule)
    },
    {
        path: ':url',
        pathMatch: 'full',
        loadChildren: () => import('@cwp/remotes-app/webpage').then(m => m.RemotesAppWebpageModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
