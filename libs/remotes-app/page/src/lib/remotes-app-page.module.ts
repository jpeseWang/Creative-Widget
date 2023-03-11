import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { remotesAppPageRoute } from './remotes-app-page.routes';
import { RemotesAppPageComponent } from './remotes-app-page.component';
import { AppLayoutModule } from '@cwp/shared/layout';
import { PageSettingComponent } from './page/page-setting/page-setting.component';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesAppPageRoute),
  ],
  declarations: [RemotesAppPageComponent, PageSettingComponent],
  exports: [RemotesAppPageComponent],
})
export class RemotesAppPageModule {}
