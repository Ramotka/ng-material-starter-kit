import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  readonly productDetails$: Observable<ProductModel> = this._activatedRoute.params.pipe(switchMap(params => this._productsService.getOne(params['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _productsService: ProductsService) {
  }
}
