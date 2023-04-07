import { NgModule } from '@angular/core';
import { ConfigurationsModule } from '@cwp/shared/configurations';
import { StoreModule } from '@ngrx/store';
import { appReducers, metaReducers } from './reducer';

@NgModule({
  imports: [
    ConfigurationsModule,
    StoreModule.forRoot(appReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
  ]
})
export class DataAccessModule {}
