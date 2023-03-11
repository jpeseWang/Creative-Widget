import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutModule } from '../../../../layout/main-layout/main-layout.module';
import { ListItemViewModule } from '../../view/list-item-view/list-item-view.module';
import { TradeSearchFilterViewModule } from '../../view/trade-search-filter-view/trade-search-filter-view.module';
import { SearchComponent } from './search.page';

@NgModule({
	declarations: [SearchComponent],
	imports: [
		CommonModule,
		MainLayoutModule,
		TradeSearchFilterViewModule,
		ListItemViewModule,
		RouterModule.forChild([{ path: '', component: SearchComponent }]),
	],
	exports: [],
})
export class SearchModule {}
