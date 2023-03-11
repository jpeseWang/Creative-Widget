import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './page/account/account.component';
import { RouterModule } from '@angular/router';
import { remotesAppAccountRoutes } from './remotes-app-account.routes';
import { AppLayoutModule } from '@cwp/shared/layout';
import { AccountContainerComponent } from './containers/account-container/account-container.component';
import { PlanAndBillingComponent } from './page/plan-and-billing/plan-and-billing.component';
import { IntegrationComponentsComponent } from './page/integration-components/integration-components.component';
import { SettingComponent } from './page/setting/setting.component';
import { RemotesAppAccountComponent } from './remotes-app-account.component';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesAppAccountRoutes),
  ],
  declarations: [
    RemotesAppAccountComponent,
    AccountComponent,
    AccountContainerComponent,
    PlanAndBillingComponent,
    IntegrationComponentsComponent,
    SettingComponent,
  ],
  exports: [RemotesAppAccountComponent, AccountComponent, AccountContainerComponent],
})
export class RemotesAppAccountModule {}
