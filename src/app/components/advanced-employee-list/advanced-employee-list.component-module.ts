import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { AdvancedEmployeeListComponent } from './advanced-employee-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule],
  declarations: [AdvancedEmployeeListComponent],
  providers: [],
  exports: [AdvancedEmployeeListComponent]
})
export class AdvancedEmployeeListComponentModule {
}
