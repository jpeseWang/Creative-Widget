import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TradeComponent } from './trade.component';
import { TRADE_ROUTES } from './trade.routes';

@NgModule({
	declarations: [TradeComponent],
	imports: [CommonModule, RouterModule.forChild(TRADE_ROUTES)],
	exports: [],
})
export class TradeModule {}
