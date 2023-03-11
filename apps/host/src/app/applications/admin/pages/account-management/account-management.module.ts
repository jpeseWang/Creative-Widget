import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountManagementComponent } from './account-management.component';

@NgModule({
	declarations: [AccountManagementComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: AccountManagementComponent }]),
	],
	exports: [],
})
export class AccountmanagementModule {}
