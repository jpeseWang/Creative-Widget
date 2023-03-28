import { Route } from '@angular/router';
import { RemotesAppPageComponent } from './remotes-app-page.component';

export const remotesAppPageRoute: Route[] = [
  {
    path: '',
    component: RemotesAppPageComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('./page/page/page.module').then(m => m.PageModule)
      },
      {
        path:'editing',
        loadChildren: () => import('./page/page-editing/page-editing.module').then(m => m.PageEditingModule)
      }
    ]
  }
];
