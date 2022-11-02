import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicHolidayModel } from '../../models/public-holiday.model';
import { PublicHolidaysService } from '../../services/public-holidays.service';

@Component({
  selector: 'app-public-holiday',
  styleUrls: ['./public-holiday.component.scss'],
  templateUrl: './public-holiday.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidayComponent {
  readonly list$: Observable<PublicHolidayModel[]> = this._publicHolidaysService.getAll();

  constructor(private _publicHolidaysService: PublicHolidaysService) {
  }
}
