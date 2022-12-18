import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductsListByRoutingComponent } from './filtered-products-list-by-routing.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, RouterModule],
  declarations: [FilteredProductsListByRoutingComponent],
  providers: [],
  exports: [FilteredProductsListByRoutingComponent]
})
export class FilteredProductsListByRoutingComponentModule {
}
