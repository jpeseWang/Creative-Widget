import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaintenanceComponent } from './maintenance.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: MaintenanceComponent,
			},
		]),
	],
	declarations: [MaintenanceComponent],
	exports: [MaintenanceComponent],
})
export class MaintenanceModule {}
