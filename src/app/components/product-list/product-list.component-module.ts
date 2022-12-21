import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductListComponent } from './product-list.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule, MatProgressSpinnerModule, MatButtonModule, RouterModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
