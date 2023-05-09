import { Route } from '@angular/router';
import { RemotesAppDashboardComponent } from './remotes-app-dashboard.component';
import { AdminDashboardComponent } from './page/admin-dashboard/admin-dashboard.component';
import { AdminCustomerSupportComponent } from './page/admin-customer-support/admin-customer-support.component';
import { AdminMarketplaceComponent } from './page/admin-marketplace/admin-marketplace.component';
import { AdminAccountManagementComponent } from './page/admin-account-management/admin-account-management.component';

export const remotesAppDashboardRoute: Route[] = [
  {
    path: '',
    component: RemotesAppDashboardComponent,
    children: [
      {
        path:'',
        component: AdminDashboardComponent
      },
      {
        path:'account-management',
        component: AdminAccountManagementComponent
      },
      {
        path:'customer-support',
        component: AdminCustomerSupportComponent
      },
      {
        path:'marketplace',
        component: AdminMarketplaceComponent
      }
    ]
  }
];
