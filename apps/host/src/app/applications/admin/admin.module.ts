import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ADMIN_ROUTES } from './admin.routes';

@NgModule({
	declarations: [AdminComponent],
	imports: [CommonModule, RouterModule.forChild(ADMIN_ROUTES)],
	exports: [],
})
export class AdminModule {}
