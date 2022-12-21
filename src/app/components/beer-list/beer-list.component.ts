import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';
import {PageEvent} from "@angular/material/paginator";

interface paginatorOptions {
  pageNumber: number,
  itemsPerPage: number
}

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListComponent {
  pageSizeOptions: number[] = [5, 10, 25, 50];
  length: number = 100;
  private _paginatorOptionsSubject: BehaviorSubject<paginatorOptions> = new BehaviorSubject<paginatorOptions>({ pageNumber: 1, itemsPerPage: 10 });
  public paginatorOptions$: Observable<paginatorOptions> = this._paginatorOptionsSubject.asObservable();

  readonly beers$: Observable<BeerModel[]> = this.paginatorOptions$.pipe(switchMap((options) => this._beersService.getAll(options.pageNumber, options.itemsPerPage)));

  constructor(private _beersService: BeersService) {
  }

  handlePageEvent(event: PageEvent): void {
    this._paginatorOptionsSubject.next({
      pageNumber: event.pageIndex + 1,
      itemsPerPage: event.pageSize
    })
  }
}
