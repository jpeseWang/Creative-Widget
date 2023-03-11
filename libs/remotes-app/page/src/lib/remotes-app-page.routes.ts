import { Route } from '@angular/router';
import { RemotesAppPageComponent } from './remotes-app-page.component';
import { PageComponent } from './page/page/page.component';
import { PageSettingComponent } from './page/page-setting/page-setting.component';

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
        path:'setting',
        component: PageSettingComponent
      }
    ]
  }
];
