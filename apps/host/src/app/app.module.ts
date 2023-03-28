import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { JwtHelperService, JwtInterceptor, JWT_OPTIONS } from '@auth0/angular-jwt';
import { CwpButtonModule } from '@cwp/shared/ui/button';
import { NgxPermissionsModule } from 'ngx-permissions';
import { CoreModule } from '../../../../libs/shared/configurations/core.module';
import { ErrorInterceptor } from '../../../../libs/shared/interceptors/error.interceptor';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppLayoutModule } from '@cwp/shared/layout';
import { AboutUsComponent } from './applications/pages/about-us/about-us.component';
import { FeaturesComponent } from './applications/pages/features/features.component';
@NgModule({
  declarations: [AppComponent, AboutUsComponent, FeaturesComponent],
  imports: [
    BrowserModule,
    AppLayoutModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    CwpButtonModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    CoreModule.forRoot(),
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
