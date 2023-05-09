import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { Category1UiComponent } from './category/category-1-ui/category-1-ui.component';
import { Category2UiComponent } from './category/category-2-ui/category-2-ui.component';
import { Category3UiComponent } from './category/category-3-ui/category-3-ui.component';
import { Footer1PopupComponent } from './footer/footer-1-popup/footer-1-popup.component';
import { Footer1UiComponent } from './footer/footer-1-ui/footer-1-ui.component';
import { Footer2PopupComponent } from './footer/footer-2-popup/footer-2-popup.component';
import { Footer2UiComponent } from './footer/footer-2-ui/footer-2-ui.component';
import { FrontPage1UiComponent } from './front-page/front-page-1-ui/front-page-1-ui.component';
import { Header1PopupComponent } from './header/header-1/header-1-popup/header-1-popup.component';
import { Header1UiComponent } from './header/header-1/header-1-ui/header-1-ui.component';
import { Header2UiComponent } from './header/header-2/header-2-ui/header-2-ui.component';
import { SelectionComponentComponent } from './selection-component/selection-component.component';
import { EditDialogComponent } from './setup-component/edit-dialog/edit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    CarouselModule,
    RouterModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Header1UiComponent,
    Header1PopupComponent,
    SelectionComponentComponent,
    EditDialogComponent,
    Header2UiComponent,
    Category1UiComponent,
    Category2UiComponent,
    Category3UiComponent,
    Footer1UiComponent,
    Footer2UiComponent,
    FrontPage1UiComponent,
    Footer1PopupComponent,
    Footer2PopupComponent,
  ],
  exports: [
    Header1UiComponent,
    Header1PopupComponent,
    SelectionComponentComponent,
    EditDialogComponent,
    Header2UiComponent,
    Category1UiComponent,
    Category2UiComponent,
    Category3UiComponent,
    Footer1UiComponent,
    Footer2UiComponent,
    FrontPage1UiComponent,
    Footer1PopupComponent,
    Footer2PopupComponent,
  ],
})
export class ComponentFeaturesModule {}
