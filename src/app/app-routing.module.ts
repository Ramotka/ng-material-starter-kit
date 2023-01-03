import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { PublicHolidayComponent } from './components/public-holiday/public-holiday.component';
import { CategoryCheckboxListComponent } from './components/category-checkbox-list/category-checkbox-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { FilteredProductsListByRoutingComponent } from './components/filtered-products-list-by-routing/filtered-products-list-by-routing.component';
import { FilteredProductListWithSubjectComponent } from './components/filtered-product-list-with-subject/filtered-product-list-with-subject.component';
import { ProductsListSortingComponent } from './components/products-list-sorting/products-list-sorting.component';
import { AdvancedEmployeeListComponent } from './components/advanced-employee-list/advanced-employee-list.component';
import { RefreshProductsComponent } from './components/refresh-products/refresh-products.component';
import { RefreshEmployeesComponent } from './components/refresh-employees/refresh-employees.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { ProductMasterDetailsComponent } from './components/product-master-details/product-master-details.component';
import { EmployeeMasterDetailsComponent } from './components/employee-master-details/employee-master-details.component';
import { CryptoMasterDetailsComponent } from './components/crypto-master-details/crypto-master-details.component';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { ProductsLiveReloadSearchComponent } from './components/products-live-reload-search/products-live-reload-search.component';
import { ProductsSearchInServiceComponent } from './components/products-search-in-service/products-search-in-service.component';
import { SortSingleProductComponent } from './components/sort-single-product/sort-single-product.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidayComponentModule } from './components/public-holiday/public-holiday.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CategoryCheckboxListComponentModule } from './components/category-checkbox-list/category-checkbox-list.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { LogInComponentModule } from './components/log-in/log-in.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { UsersServiceModule } from './services/users.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { FilteredProductsListByRoutingComponentModule } from './components/filtered-products-list-by-routing/filtered-products-list-by-routing.component-module';
import { FilteredProductListWithSubjectComponentModule } from './components/filtered-product-list-with-subject/filtered-product-list-with-subject.component-module';
import { ProductsListSortingComponentModule } from './components/products-list-sorting/products-list-sorting.component-module';
import { AdvancedEmployeeListComponentModule } from './components/advanced-employee-list/advanced-employee-list.component-module';
import { AdvancedEmployeesServiceModule } from './services/advanced-employees.service-module';
import { RefreshProductsComponentModule } from './components/refresh-products/refresh-products.component-module';
import { RefreshEmployeesComponentModule } from './components/refresh-employees/refresh-employees.component-module';
import { BeerListComponentModule } from './components/beer-list/beer-list.component-module';
import { BeersServiceModule } from './services/beers.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatFactsServiceModule } from './services/cat-facts.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { PredictionsServiceModule } from './services/predictions.service-module';
import { ProductMasterDetailsComponentModule } from './components/product-master-details/product-master-details.component-module';
import { EmployeeMasterDetailsComponentModule } from './components/employee-master-details/employee-master-details.component-module';
import { CryptoMasterDetailsComponentModule } from './components/crypto-master-details/crypto-master-details.component-module';
import { NewCryptoServiceModule } from './services/new-crypto.service-module';
import { ProductsSearchComponentModule } from './components/products-search/products-search.component-module';
import { ProductsLiveReloadSearchComponentModule } from './components/products-live-reload-search/products-live-reload-search.component-module';
import { ProductsSearchInServiceComponentModule } from './components/products-search-in-service/products-search-in-service.component-module';
import { SortSingleProductComponentModule } from './components/sort-single-product/sort-single-product.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'crypto', component: CryptoChipsComponent },
      { path: 'public-holidays', component: PublicHolidayComponent },
      { path: 'checkbox-categories', component: CategoryCheckboxListComponent },
      { path: 'categories-menu', component: CategoriesMenuComponent },
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: LogInComponent },
      { path: 'register', component: RegisterFormComponent },
      { path: 'products/sort', component: SortedProductListComponent },
      { path: 'products/:category', component: FilteredProductsListByRoutingComponent },
      { path: 'products-filter-subject', component: FilteredProductListWithSubjectComponent },
      { path: 'sorted-products', component: ProductsListSortingComponent },
      { path: 'advanced-list', component: AdvancedEmployeeListComponent },
      { path: 'refresh-products', component: RefreshProductsComponent },
      { path: 'refresh-employees', component: RefreshEmployeesComponent },
      { path: 'beers-with-pagination', component: BeerListComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'cat-fact', component: CatFactsComponent },
      { path: 'age/:name', component: AgePredictionComponent },
      { path: 'products-master-details', component: ProductMasterDetailsComponent },
      { path: 'employees-master-details', component: EmployeeMasterDetailsComponent },
      { path: 'crypto-master-details', component: CryptoMasterDetailsComponent },
      { path: 'products-search', component: ProductsSearchComponent },
      { path: 'products-search-live-reload', component: ProductsLiveReloadSearchComponent },
      { path: 'products-search-service', component: ProductsSearchInServiceComponent },
      { path: 'sort-single-product', component: SortSingleProductComponent }
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    CategoryListComponentModule,
    CategoriesServiceModule,
    CryptoChipsComponentModule,
    CryptoServiceModule,
    PublicHolidayComponentModule,
    PublicHolidaysServiceModule,
    CategoryCheckboxListComponentModule,
    CategoriesMenuComponentModule,
    ProductFormComponentModule,
    EmployeeFormComponentModule,
    EmployeesServiceModule,
    LogInComponentModule,
    LoginServiceModule,
    RegisterFormComponentModule,
    UsersServiceModule,
    SortedProductListComponentModule,
    FilteredProductsListByRoutingComponentModule,
    FilteredProductListWithSubjectComponentModule,
    ProductsListSortingComponentModule,
    AdvancedEmployeeListComponentModule,
    AdvancedEmployeesServiceModule,
    RefreshProductsComponentModule,
    RefreshEmployeesComponentModule,
    BeerListComponentModule,
    BeersServiceModule,
    ProductDetailsComponentModule,
    CatFactsComponentModule,
    CatFactsServiceModule,
    AgePredictionComponentModule,
    PredictionsServiceModule,
    ProductMasterDetailsComponentModule,
    EmployeeMasterDetailsComponentModule,
    CryptoMasterDetailsComponentModule,
    NewCryptoServiceModule,
    ProductsSearchComponentModule,
    ProductsLiveReloadSearchComponentModule,
    ProductsSearchInServiceComponentModule,
    SortSingleProductComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
