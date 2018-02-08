import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentListComponent } from './payment-list/payment-list.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ],
  declarations: [PaymentListComponent]
})
export class PaymentsModule { }
