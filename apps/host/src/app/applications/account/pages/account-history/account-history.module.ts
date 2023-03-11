import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountHistoryComponent } from './account-history.component';

@NgModule({
	declarations: [AccountHistoryComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: AccountHistoryComponent }]),
	],
	exports: [],
})
export class AccountHistoryModule {}
