import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountProfileComponent } from './account-profile.page';

@NgModule({
	declarations: [AccountProfileComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: AccountProfileComponent }]),
	],
	exports: [],
})
export class AccountProfileModule {}
