import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactModel } from '../../models/cat-fact.model';
import { CatFactsService } from '../../services/cat-facts.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactsComponent {
  readonly catFact$: Observable<CatFactModel> = this._catFactsService.getOne();

  constructor(private _catFactsService: CatFactsService) {
  }
}
