import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Observable, combineLatest, map } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-filtered-products-list-by-routing',
  templateUrl: './filtered-products-list-by-routing.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductsListByRoutingComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this._activatedRoute.params
  ]).pipe(map(([products, params]: [ProductModel[], Params]) => {
    return products.filter((product: ProductModel) => product.category === params['category'])
  }))

  constructor(private _activatedRoute: ActivatedRoute, private _categoriesService: CategoriesService, private _productsService: ProductsService) {
  }
}
