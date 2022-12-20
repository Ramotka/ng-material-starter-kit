import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RefreshProductsComponent } from './refresh-products.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [RefreshProductsComponent],
  providers: [],
  exports: [RefreshProductsComponent]
})
export class RefreshProductsComponentModule {
}
