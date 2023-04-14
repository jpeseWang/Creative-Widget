import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AdminGuard, IsLoggedInGuard } from './guard';
import { ErrorInterceptor, JwtInterceptor } from './interceptor';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ApiService, AuthService, NavigationService, NotificationService } from './services';


export const CONFIGURATION_PROVIDERS = [
  IsLoggedInGuard,
  AdminGuard,
  ApiService,
  AuthService,
  NavigationService,
  NotificationService,
  ErrorInterceptor,
  JwtInterceptor,
];

export const CONFIGURATION_MODULES = [CommonModule, NgxPermissionsModule, MatSnackBarModule, MatDialogModule];

@NgModule({
  imports: [...CONFIGURATION_MODULES],
  declarations: [],
})
export class ConfigurationsModule {
  constructor(@Optional() @SkipSelf() parentModule: ConfigurationsModule) {
    throwIfAlreadyLoaded(parentModule, 'ConfigurationsModule');
  }

  static forRoot(): ModuleWithProviders<ConfigurationsModule> {
    return {
      ngModule: ConfigurationsModule,
      providers: [...CONFIGURATION_PROVIDERS],
    };
  }
}
