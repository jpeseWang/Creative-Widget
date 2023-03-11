import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AdminGuard } from './guards';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ApiService, AuthService } from './services';
export const CORE_PROVIDERS = [IsLoggedInGuard, AdminGuard, ApiService, AuthService];

export const CORE_MODULES = [CommonModule, NgxPermissionsModule];

@NgModule({
	imports: [...CORE_MODULES],
	declarations: [],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, 'CoreModule');
	}

	static forRoot(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [...CORE_PROVIDERS],
		};
	}
}
