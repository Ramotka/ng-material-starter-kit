import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RefreshEmployeesComponent } from './refresh-employees.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [RefreshEmployeesComponent],
  providers: [],
  exports: [RefreshEmployeesComponent]
})
export class RefreshEmployeesComponentModule {
}
