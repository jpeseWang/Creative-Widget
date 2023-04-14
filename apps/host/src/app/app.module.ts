/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtHelperService, JwtInterceptor, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AppLayoutModule } from '@cwp/shared/layout';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ConfigurationsModule } from '../../../../libs/shared/configurations/src';
import { ErrorInterceptor } from '../../../../libs/shared/configurations/src/lib/interceptor';
import { appReducers, metaReducers } from '../../../../libs/shared/data-access/src/lib';
import { AuthEffect } from '../../../../libs/shared/data-access/src/lib/auth';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AboutUsComponent } from './applications/pages/about-us/about-us.component';
import { FeaturesComponent } from './applications/pages/features/features.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, AboutUsComponent, FeaturesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppLayoutModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgxPermissionsModule.forRoot(),
    HttpClientModule,
    ConfigurationsModule.forRoot(), // TODO: fix here
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en-US',
    }),
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
