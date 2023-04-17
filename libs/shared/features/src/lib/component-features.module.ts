import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DragDropModule } from 'primeng/dragdrop';
import { SidebarModule } from 'primeng/sidebar';
import { Header1PopupComponent } from './header-1/header-1-popup/header-1-popup.component';
import { Header1UiComponent } from './header-1/header-1-ui/header-1-ui.component';
import { SelectionComponentComponent } from './selection-component/selection-component.component';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    CarouselModule,
    RouterModule,
    DragDropModule
  ],
  declarations: [
    Header1UiComponent,
    Header1PopupComponent,
    SelectionComponentComponent,
  ],
  exports: [Header1UiComponent, Header1PopupComponent, SelectionComponentComponent],
})
export class ComponentFeaturesModule {}
