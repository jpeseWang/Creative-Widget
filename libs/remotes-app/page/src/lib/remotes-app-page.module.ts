import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { RemotesAppPageComponent } from './remotes-app-page.component';
import { remotesAppPageRoute } from './remotes-app-page.routes';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesAppPageRoute),
  ],
  declarations: [RemotesAppPageComponent],
  exports: [RemotesAppPageComponent],
})
export class RemotesAppPageModule {}
