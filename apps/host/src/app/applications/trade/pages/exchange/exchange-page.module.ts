import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExchangeComponent } from './exchange.page';

@NgModule({
	declarations: [ExchangeComponent],
	imports: [CommonModule, RouterModule.forChild([{ path: '', component: ExchangeComponent }])],
	exports: [],
})
export class ExchangeModule {}
