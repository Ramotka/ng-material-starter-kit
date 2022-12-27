import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-master-details',
  templateUrl: './product-master-details.component.html',
  styleUrls: ['./product-master-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductMasterDetailsComponent {
  private _selectedProductId: Subject<string> = new Subject<string>();
  public selectedProductId$: Observable<string> =
    this._selectedProductId.asObservable();

  readonly products$: Observable<ProductModel[]> =
    this._productsService.getAll();

  readonly details$: Observable<ProductModel> = this.selectedProductId$.pipe(
    switchMap((id) => this._productsService.getOne(id))
  );

  constructor(private _productsService: ProductsService) {}

  selectProduct(id: string): void {
    this._selectedProductId.next(id);
  }
}
