import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map, debounceTime, combineLatest } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-live-reload-search',
  templateUrl: './products-live-reload-search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsLiveReloadSearchComponent {
  readonly search: FormGroup = new FormGroup({ title: new FormControl() });
  readonly search$: Observable<string> = this.search.valueChanges.pipe(
    map((form) => form.title),
    debounceTime(1000)
  );

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.search$,
  ]).pipe(
    map(([products, search]: [ProductModel[], string]) =>
      products.filter((product) => product.title.startsWith(search))
    )
  );

  constructor(private _productsService: ProductsService) {}
}
