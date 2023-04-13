import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Header1PopupComponent } from './header_1/header-1-popup/header-1-popup.component';
import { Header1UiComponent } from './header_1/header-1-ui/header-1-ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Header1UiComponent, Header1PopupComponent],
})
export class ComponentFeaturesModule {}
