import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from '@cwp/shared/layout';
import { RouterModule } from '@angular/router';
import { remotesAppDashboardRoute } from './remotes-app-dashboard.routes';
import { RemotesAppDashboardComponent } from './remotes-app-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesAppDashboardRoute),
  ],
  declarations: [
    RemotesAppDashboardComponent,
  ],
  exports: [RemotesAppDashboardComponent],
})
export class RemotesAppDashboardModule {}
