import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductMasterDetailsComponent } from './product-master-details.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: [ProductMasterDetailsComponent],
  providers: [],
  exports: [ProductMasterDetailsComponent],
})
export class ProductMasterDetailsComponentModule { }
