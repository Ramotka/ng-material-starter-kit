import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-refresh-products',
  templateUrl: './refresh-products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefreshProductsComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();

  readonly refreshProductList$: Observable<ProductModel[]> = this.refresh$.pipe(switchMap(data => this._productsService.getAll()));

  constructor(private _productsService: ProductsService) {
  }

  delete(id: string): void {
    this._productsService.delete(id).subscribe(() => this._refreshSubject.next());
  }
}
