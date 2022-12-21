import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PublicHolidayComponent } from './public-holiday.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule, MatProgressBarModule],
  declarations: [PublicHolidayComponent],
  providers: [],
  exports: [PublicHolidayComponent]
})
export class PublicHolidayComponentModule {
}
