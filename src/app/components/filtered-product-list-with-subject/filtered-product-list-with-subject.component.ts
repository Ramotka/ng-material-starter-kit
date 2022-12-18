import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-filtered-product-list-with-subject',
  templateUrl: './filtered-product-list-with-subject.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductListWithSubjectComponent {
  private _categoriesSubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categoriesSubject.asObservable();
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.category$
  ]).pipe(map(([products, category]: [ProductModel[], string]) => {
    return products.filter((product: ProductModel) => product.category === category)
  }))

  constructor(private _productsService: ProductsService, private _categoriesService: CategoriesService) {
  }

  selectCategory(category: string): void {
    this._categoriesSubject.next(category)
  }
}
