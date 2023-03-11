import { Route } from '@angular/router';
import { RemotesAppAdminComponent } from './remotes-app-admin.component';

export const remotesAppAdminRoute: Route[] = [
  {
    path: '',
    component: RemotesAppAdminComponent,
    // children: [
    //   {
    //     path:'',
    //     component: CustomerSupportComponent
    //   },
    //   {
    //     path:':id',
    //     component: TicketDetailComponent
    //   }
    // ]
  }
];
