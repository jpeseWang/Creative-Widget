import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { StoreModule } from '@ngrx/store';
import { NgxPermissionsModule } from 'ngx-permissions';
import { appReducers, metaReducers } from '../../../../libs/shared/data-access/src/lib';
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
    // ConfigurationsModule.forRoot(), // TODO: fix here
    StoreModule.forRoot(appReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
  ],
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
