import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from '../../configurations/services';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { MainLayoutComponent } from './main-layout.component';
@NgModule({
	declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
	imports: [CommonModule],
	providers: [AuthService],
	bootstrap: [MainLayoutComponent],
	exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
