import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CryptoChipsComponent} from './components/crypto-chips/crypto-chips.component';
import {PublicHolidayComponent} from './components/public-holiday/public-holiday.component';
import {CategoryCheckboxListComponent} from './components/category-checkbox-list/category-checkbox-list.component';
import {CategoriesMenuComponent} from './components/categories-menu/categories-menu.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {CategoryListComponentModule} from './components/category-list/category-list.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {CryptoChipsComponentModule} from './components/crypto-chips/crypto-chips.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';
import {PublicHolidayComponentModule} from './components/public-holiday/public-holiday.component-module';
import {PublicHolidaysServiceModule} from './services/public-holidays.service-module';
import {
  CategoryCheckboxListComponentModule
} from './components/category-checkbox-list/category-checkbox-list.component-module';
import {CategoriesMenuComponentModule} from './components/categories-menu/categories-menu.component-module';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products', component: ProductListComponent}, {
    path: 'categories',
    component: CategoryListComponent
  }, {path: 'crypto', component: CryptoChipsComponent}, {
    path: 'public-holidays',
    component: PublicHolidayComponent
  }, {path: 'checkbox-categories', component: CategoryCheckboxListComponent}, {
    path: 'categories-menu',
    component: CategoriesMenuComponent
  }, {
    path: 'create-product',
    component: ProductFormComponent
  }]), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, CryptoServiceModule, PublicHolidayComponentModule, PublicHolidaysServiceModule, CategoryCheckboxListComponentModule, CategoriesMenuComponentModule, ProductFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
