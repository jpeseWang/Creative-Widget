import { Route } from '@angular/router';
import { RemotesAppDesignSystemComponent } from './remotes-app-design-system.component';
import { TypographyComponent } from './page/typography/typography.component';

export const remotesAppDesignSystem: Route[] = [
  {
    path: '',
    component: RemotesAppDesignSystemComponent,
    children: [
      {
        path:'',
        component: TypographyComponent
      },
    ]
  }
];
