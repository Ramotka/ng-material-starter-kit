import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NewCryptoModel } from '../../models/new-crypto.model';
import { NewCryptoService } from '../../services/new-crypto.service';

@Component({
  selector: 'app-crypto-master-details',
  templateUrl: './crypto-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoMasterDetailsComponent {
  private _selectedCryptoSubject: Subject<NewCryptoModel> =
    new Subject<NewCryptoModel>();
  public selectedCrypto$: Observable<NewCryptoModel> =
    this._selectedCryptoSubject.asObservable();

  readonly crypto$: Observable<NewCryptoModel[]> =
    this._newCryptoService.getAll();

  constructor(private _newCryptoService: NewCryptoService) {}

  selectCrypto(data: NewCryptoModel): void {
    this._selectedCryptoSubject.next(data);
  }
}
