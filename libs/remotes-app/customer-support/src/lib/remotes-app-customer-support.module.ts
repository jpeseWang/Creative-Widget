import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from '@cwp/shared/layout';
import { RouterModule } from '@angular/router';
import { remotesAppCustomerSupportRoute } from './remotes-app-customer-support.routes';
import { RemotesAppCustomerSupportComponent } from './remotes-app-customer-support.component';
import { TicketCreationPopupComponent } from './containers/ticket-creation-popup/ticket-creation-popup.component';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesAppCustomerSupportRoute),
  ],
  declarations: [
    RemotesAppCustomerSupportComponent,
    TicketCreationPopupComponent,
  ],
  exports: [RemotesAppCustomerSupportComponent],
})
export class RemotesAppCustomerSupportModule {}
