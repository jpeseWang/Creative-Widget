import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { remotesAppPageRoute } from './remotes-app-page.routes';
import { RemotesAppPageComponent } from './remotes-app-page.component';
import { AppLayoutModule } from '@cwp/shared/layout';
import { PageEditingComponent } from './page/page-editing/page-editing.component';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesAppPageRoute),
  ],
  declarations: [RemotesAppPageComponent, PageEditingComponent],
  exports: [RemotesAppPageComponent],
})
export class RemotesAppPageModule {}