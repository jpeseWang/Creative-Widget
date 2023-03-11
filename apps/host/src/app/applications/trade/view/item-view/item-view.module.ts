import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemComponent } from './item.view';

@NgModule({
	declarations: [ItemComponent],
	imports: [CommonModule],
	exports: [ItemComponent],
})
export class ItemViewModule {}
