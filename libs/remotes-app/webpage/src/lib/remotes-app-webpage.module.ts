import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { remotesAppWebpageRoutes } from './remotes-app-webpage.routes';
import { WebpageComponent } from './page/webpage/webpage.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(remotesAppWebpageRoutes)],
  declarations: [WebpageComponent],
  exports: [WebpageComponent],
})
export class RemotesAppWebpageModule {}
