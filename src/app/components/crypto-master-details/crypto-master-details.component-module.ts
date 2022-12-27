import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CryptoMasterDetailsComponent } from './crypto-master-details.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: [CryptoMasterDetailsComponent],
  providers: [],
  exports: [CryptoMasterDetailsComponent],
})
export class CryptoMasterDetailsComponentModule { }
