import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsSearchComponent {
  readonly search: FormGroup = new FormGroup({ title: new FormControl() });

  private _searchSubject: BehaviorSubject<string> = new BehaviorSubject('');
  public search$: Observable<string> = this._searchSubject.asObservable();

  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  orders$: Observable<string[]> = of(['asc', 'desc']);

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.search$,
    this.order$,
  ]).pipe(
    map(([products, search, order]: [ProductModel[], string, string]) => {
      if (!search) {
        return [];
      }
      return products
        .filter((product) => product.title.startsWith(search))
        .sort((a, b) => {
          if (a.price > b.price) return order === 'asc' ? 1 : -1;
          if (a.price < b.price) return order === 'asc' ? -1 : 1;
          return 0;
        });
    })
  );

  constructor(private _productsService: ProductsService) {}

  onSearchSubmitted(search: FormGroup): void {
    this._searchSubject.next(search.get('title')?.value);
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }
}
