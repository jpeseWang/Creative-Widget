import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { PageContainerComponent } from '../../containers/page-container/page-container.component';
import { PageDetailsComponent } from '../../containers/page-details/page-details.component';
import { PageComponent } from './page.component';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild([
      { path: '', component: PageComponent },
      {
        path: ':id', // Route path with a dynamic parameter for page ID
        component: PageDetailsComponent // Component to be displayed for the page route
      }
    ]),
  ],
  declarations: [PageContainerComponent, PageComponent, PageDetailsComponent],
  exports: [PageContainerComponent, PageComponent, PageDetailsComponent],
})
export class PageModule {}
