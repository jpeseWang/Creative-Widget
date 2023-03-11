import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './page/marketplace/marketplace.component';
import { RouterModule } from '@angular/router';
import { remotesAppMarketplaceRoutes } from './remotes-app-marketplace.routes';
import { ComponentDetailComponent } from './container/component-detail/component-detail.component';
import { PaymentComponent } from './page/payment/payment.component';
import { RemotesAppMarketplaceComponent } from './remotes-app-marketplace.component';
import { AppLayoutModule } from '@cwp/shared/layout';

@NgModule({
  imports: [CommonModule, AppLayoutModule, RouterModule.forChild(remotesAppMarketplaceRoutes)],
  declarations: [
    RemotesAppMarketplaceComponent,
    
    MarketplaceComponent,
    ComponentDetailComponent,
    PaymentComponent,
  ],
  exports: [RemotesAppMarketplaceComponent, MarketplaceComponent],
})
export class RemotesAppMarketplaceModule {}
