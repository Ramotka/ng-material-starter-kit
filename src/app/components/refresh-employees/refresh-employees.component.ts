import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AdvancedEmployeeModel } from '../../models/advanced-employee.model';
import { AdvancedEmployeesService } from '../../services/advanced-employees.service';

@Component({
  selector: 'app-refresh-employees',
  templateUrl: './refresh-employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefreshEmployeesComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();

  readonly refreshEmployees$: Observable<AdvancedEmployeeModel[]> = this.refresh$.pipe(switchMap(data => this._advancedEmployeesService.getAll()));

  constructor(private _advancedEmployeesService: AdvancedEmployeesService) {
  }

  delete(id: string): void {
    this._advancedEmployeesService.delete(id).subscribe(() => this._refreshSubject.next());
  }
}
