import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { PageContainerComponent } from '../../containers/page-container/page-container.component';

const COMPONENT = [PageComponent, PageContainerComponent];
@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild([
      { path: '', component: PageComponent }
    ]),
  ],
  declarations: [COMPONENT],
  exports: [COMPONENT],
})
export class PageModule {}
