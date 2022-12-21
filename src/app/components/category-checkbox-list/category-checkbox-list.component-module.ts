import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoryCheckboxListComponent } from './category-checkbox-list.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
    imports: [MatCardModule, MatCheckboxModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CategoryCheckboxListComponent],
  providers: [],
  exports: [CategoryCheckboxListComponent]
})
export class CategoryCheckboxListComponentModule {
}
