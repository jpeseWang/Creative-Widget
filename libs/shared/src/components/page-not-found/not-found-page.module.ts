import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found.page';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: NotFoundPageComponent,
			},
		]),
	],
	declarations: [NotFoundPageComponent],
	exports: [NotFoundPageComponent],
})
export class NotFoundPageModule {}
