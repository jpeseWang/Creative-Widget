import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routes';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, RouterModule.forChild(HOME_ROUTES)],
	exports: [HomeComponent],
})
export class HomeModule {}
