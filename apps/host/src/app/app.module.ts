import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ConfigurationsModule } from '../../../../libs/shared/configurations/src';
import { AuthService } from '../../../../libs/shared/configurations/src/lib/services';
import { appReducers, metaReducers } from '../../../../libs/shared/data-access/src/lib';
import { AuthEffect } from '../../../../libs/shared/data-access/src/lib/auth';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AboutUsComponent } from './applications/pages/about-us/about-us.component';
import { FeaturesComponent } from './applications/pages/features/features.component';
@NgModule({
  declarations: [AppComponent, AboutUsComponent, FeaturesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppLayoutModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgxPermissionsModule.forRoot(),
    HttpClientModule,
    ConfigurationsModule.forRoot(), // TODO: fix here
    EffectsModule.forRoot([
      AuthEffect,
    ]),
    StoreModule.forRoot(appReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
  ],
  providers: [AuthService],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: JwtInterceptor,
  //     multi: true,
  //   },
  //   { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  //   JwtHelperService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: ErrorInterceptor,
  //     multi: true,
  //   },
  //   { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
