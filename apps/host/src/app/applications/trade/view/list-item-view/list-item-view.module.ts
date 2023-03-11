import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemViewModule } from '../item-view/item-view.module';
import { ListItemComponent } from './list-item.view';

@NgModule({
	declarations: [ListItemComponent],
	imports: [ItemViewModule, CommonModule],
	exports: [ListItemComponent],
})
export class ListItemViewModule {}
