import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageComponent } from '@cwp/remotes-app/page';
import { Header1PopupComponent } from './header_1/header-1-popup/header-1-popup.component';
import { Header1UiComponent } from './header_1/header-1-ui/header-1-ui.component';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      { path: '', component: PageComponent },
    ])
  ],
  declarations: [Header1UiComponent, Header1PopupComponent],
  exports: [Header1UiComponent, Header1PopupComponent],
})
export class ComponentFeaturesModule {}
