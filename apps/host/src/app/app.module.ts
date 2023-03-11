import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CwpButtonModule } from '@cwp/shared/ui/button';
import { FeaturesComponent } from './applications/pages/features/features.component';
import { AboutUsComponent } from './applications/pages/about-us/about-us.component';
import { AppLayoutModule } from '@cwp/shared/layout';

@NgModule({
  declarations: [AppComponent, FeaturesComponent, AboutUsComponent],
  imports: [
    BrowserModule,
    AppLayoutModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    CwpButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
