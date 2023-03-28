import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { remotesAppPageRoute } from './remotes-app-page.routes';
import { RemotesAppPageComponent } from './remotes-app-page.component';
import { AppLayoutModule } from '@cwp/shared/layout';

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