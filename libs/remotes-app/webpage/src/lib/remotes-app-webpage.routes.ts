import { Route } from '@angular/router';
import { WebpageComponent } from './page/webpage/webpage.component';

export const remotesAppWebpageRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: WebpageComponent}
];
