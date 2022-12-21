import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PredictionModel } from '../../models/prediction.model';
import { PredictionsService } from '../../services/predictions.service';

@Component({
  selector: 'app-age-prediction',
  templateUrl: './age-prediction.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgePredictionComponent {
  readonly agePrediction$: Observable<PredictionModel> = this._activatedRoute.params.pipe(switchMap(params => this._predictionsService.getOne(params['name'])));

  constructor(private _predictionsService: PredictionsService, private _activatedRoute: ActivatedRoute) {
  }
}
