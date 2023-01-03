import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  combineLatest,
  debounceTime,
  map,
  of,
  startWith,
} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-sort-single-product',
  templateUrl: './sort-single-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortSingleProductComponent {
  readonly sortDirection: FormGroup = new FormGroup({
    direction: new FormControl(''),
  });
  readonly sortDirection$: Observable<string> =
    this.sortDirection.valueChanges.pipe(
      startWith({ direction: '' }),
      map((form) => form.direction),
      debounceTime(1000)
    );

  readonly orders$: Observable<string[]> = of(['asc', 'desc']);

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.sortDirection$,
  ]).pipe(
    map(([products, direction]: [ProductModel[], string]) =>
      products.sort((a, b) => {
        if (a.title > b.title) return direction === 'asc' ? 1 : -1;
        if (a.title < b.title) return direction === 'asc' ? -1 : 1;
        return 0;
      })
    )
  );

  constructor(private _productsService: ProductsService) {}
}
