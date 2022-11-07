import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsModel } from '../models/credentials.model';

@Injectable()
export class LoginService {
  constructor(private _httpClient: HttpClient) {
  }

  logIn(credentials: CredentialsModel): Observable<CredentialsModel> {
    return this._httpClient.post<CredentialsModel>('https://fakestoreapi.com/docs', credentials);
  }
}
