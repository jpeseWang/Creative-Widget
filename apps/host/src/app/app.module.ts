import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { APP_ROUTES } from './app.routes';
import { CoreModule } from './configurations';
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), CoreModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
