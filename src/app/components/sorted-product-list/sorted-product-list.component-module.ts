import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { SortedProductListComponent } from './sorted-product-list.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule, MatListModule],
  declarations: [SortedProductListComponent],
  providers: [],
  exports: [SortedProductListComponent]
})
export class SortedProductListComponentModule {
}
