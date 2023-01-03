import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SortSingleProductComponent } from './sort-single-product.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule, MatListModule, MatInputModule, MatButtonModule],
  declarations: [SortSingleProductComponent],
  providers: [],
  exports: [SortSingleProductComponent]
})
export class SortSingleProductComponentModule {
}
