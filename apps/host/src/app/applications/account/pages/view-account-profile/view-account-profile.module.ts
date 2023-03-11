import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewAccountProfileComponent } from './view-account-profile.component';

@NgModule({
	declarations: [ViewAccountProfileComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: ViewAccountProfileComponent }]),
	],
	exports: [],
})
export class ViewAccountProfileModule {}
