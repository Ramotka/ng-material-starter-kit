import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-search-in-service',
  templateUrl: './products-search-in-service.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsSearchInServiceComponent {
  private _searchSubject: BehaviorSubject<string> = new BehaviorSubject('');
  readonly search$: Observable<string> = this._searchSubject.asObservable();
  readonly search: FormGroup = new FormGroup({ title: new FormControl() });
  readonly products$: Observable<ProductModel[]> = this.search$.pipe(
    switchMap((search) => this._productsService.getAllWithSearch(search))
  );

  constructor(private _productsService: ProductsService) {}

  onSearchSubmitted(search: FormGroup): void {
    this._searchSubject.next(search.get('title')?.value);
  }
}
