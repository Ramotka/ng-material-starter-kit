import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewCryptoModel } from '../models/new-crypto.model';

@Injectable({ providedIn: 'root' })
export class NewCryptoService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<NewCryptoModel[]> {
    return this._httpClient.get<NewCryptoModel[]>(
      'https://api2.binance.com/api/v3/ticker/24hr'
    );
  }
}
