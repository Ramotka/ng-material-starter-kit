import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdvancedEmployeeModel } from '../../models/advanced-employee.model';
import { AdvancedEmployeesService } from '../../services/advanced-employees.service';

@Component({
  selector: 'app-advanced-employee-list',
  templateUrl: './advanced-employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedEmployeeListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject('asc')
  public order$: Observable<string> = this._orderSubject.asObservable();
  public orders$: Observable<string[]> = of(['asc', 'desc']);

  private _rangeSubject: Subject<string> = new Subject<string>();
  public range$: Observable<string> = this._rangeSubject.asObservable();
  public ranges$: Observable<string[]> = of(['all', '0-20', '21-30', '31-40', '41-50', '51-100'])

  readonly employees$: Observable<AdvancedEmployeeModel[]> = combineLatest([
    this._advancedEmployeesService.getAll(),
    this.order$,
    this.range$
  ]).pipe(map(([employees, order, range]: [AdvancedEmployeeModel[], string, string]) => {
    const filteredEmployees: AdvancedEmployeeModel[] = employees.filter((employee) => {
      if (range === 'all') return true;
      const min: number = +range.split('-')[0]
      const max: number = +range.split('-')[1]
      return +employee.age >= min && +employee.age <= max;
    });
    return {employees: filteredEmployees, order: order}
    }
    ), map((data:{employees: AdvancedEmployeeModel[], order: string}) => {
      return data.employees.sort((a, b) => {
        if (a.salary > b.salary) return data.order === 'asc' ? 1 : -1;
        if (a.salary < b.salary) return data.order === 'asc' ? -1 : 1;
        return 0;
      })
    })
);

  constructor(private _advancedEmployeesService: AdvancedEmployeesService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order)
  }

  selectRange(range: string): void {
    this._rangeSubject.next(range);
  }
}
