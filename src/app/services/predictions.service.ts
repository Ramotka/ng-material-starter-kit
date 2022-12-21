import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PredictionModel} from "../models/prediction.model";

@Injectable()
export class PredictionsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(name: string): Observable<PredictionModel> {
    return this._httpClient.get<PredictionModel>('https://api.agify.io/?name=' + name)
}
}
