import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TradeSearchFilterComponent } from './trade-search-filter.view';

@NgModule({
	declarations: [TradeSearchFilterComponent],
	imports: [CommonModule],
	exports: [TradeSearchFilterComponent],
})
export class TradeSearchFilterViewModule {}
