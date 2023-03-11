import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ACCOUNT_ROUTES } from './account.routes';

@NgModule({
	declarations: [AccountComponent],
	imports: [CommonModule, RouterModule.forChild(ACCOUNT_ROUTES)],
	exports: [],
})
export class AccountModule {}
