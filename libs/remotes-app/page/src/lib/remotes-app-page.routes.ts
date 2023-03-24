import { Route } from '@angular/router';
import { RemotesAppPageComponent } from './remotes-app-page.component';
import { PageComponent } from './page/page/page.component';
import { PageEditingComponent } from './page/page-editing/page-editing.component';

export const remotesAppPageRoute: Route[] = [
  {
    path: '',
    component: RemotesAppPageComponent,
    children: [
      {
        path:'',
        component: PageComponent
      },
      {
        path:'editing',
        component: PageEditingComponent
      }
    ]
  }
];
