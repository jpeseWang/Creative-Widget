import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IsLoggedInGuard } from '@cwp/shared/configurations';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ComponentFeaturesModule } from '@cwp/shared/features';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PageContainerComponent } from '../../containers/page-container/page-container.component';
import { PageDetailsComponent } from '../../containers/page-details/page-details.component';
import { PageComponent } from './page.component';

@NgModule({
  declarations: [PageContainerComponent, PageComponent, PageDetailsComponent],
  imports: [
    CommonModule,
    DragDropModule,
    SidebarModule,
    ButtonModule,
    RouterModule.forChild([
      {
        path: '',
        canActivate: [IsLoggedInGuard],
        component: PageComponent
      },
      {
        path: ':id',
        canActivate: [IsLoggedInGuard],
        component: PageDetailsComponent // Component to be displayed for the page route
      }
    ]),
    ComponentFeaturesModule
  ]
})
export class PageModule {}
