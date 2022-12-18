import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductListWithSubjectComponent } from './filtered-product-list-with-subject.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule, FlexModule],
  declarations: [FilteredProductListWithSubjectComponent],
  providers: [],
  exports: [FilteredProductListWithSubjectComponent]
})
export class FilteredProductListWithSubjectComponentModule {
}
