import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AdvancedEmployeeModel } from '../../models/advanced-employee.model';
import { AdvancedEmployeesService } from '../../services/advanced-employees.service';

@Component({
  selector: 'app-employee-master-details',
  templateUrl: './employee-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeMasterDetailsComponent {
  private _selectedEmployeeId: Subject<string> = new Subject<string>();
  public selectedEmployeeId$: Observable<string> =
    this._selectedEmployeeId.asObservable();

  readonly employees$: Observable<AdvancedEmployeeModel[]> =
    this._advancedEmployeesService.getAll();
  readonly details$: Observable<AdvancedEmployeeModel> =
    this.selectedEmployeeId$.pipe(
      switchMap((id) => this._advancedEmployeesService.getOne(id))
    );

  constructor(private _advancedEmployeesService: AdvancedEmployeesService) {}

  selectEmployee(id: string): void {
    this._selectedEmployeeId.next(id);
  }
}
