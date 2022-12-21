import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { CategoryListComponent } from './category-list.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [MatCardModule, CommonModule, MatCheckboxModule, MatListModule, MatProgressSpinnerModule],
  declarations: [CategoryListComponent],
  providers: [],
  exports: [CategoryListComponent]
})
export class CategoryListComponentModule {
}
