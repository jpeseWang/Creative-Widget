import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { remotesAppDesignSystem } from './remotes-app-design-system.routes';
import { RemotesAppDesignSystemComponent } from './remotes-app-design-system.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(remotesAppDesignSystem),
  ],
  declarations: [RemotesAppDesignSystemComponent],
  exports: [RemotesAppDesignSystemComponent],
})
export class RemotesAppDesignSystemModule {}
