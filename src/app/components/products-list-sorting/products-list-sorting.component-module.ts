import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { ProductsListSortingComponent } from './products-list-sorting.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [ProductsListSortingComponent],
  providers: [],
  exports: [ProductsListSortingComponent]
})
export class ProductsListSortingComponentModule {
}
