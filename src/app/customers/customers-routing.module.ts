import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerPriceComponent} from './customer-price/customer-price.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';

const routes: Routes = [
  {
    path : '', 
    component : CustomerListComponent,
    children : [
      {path: 'customer-price', component: CustomerPriceComponent},
      {path: 'customer-details', component: CustomerDetailsComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
