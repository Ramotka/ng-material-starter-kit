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
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { FilteredProductsListByRoutingComponentModule } from './components/filtered-products-list-by-routing/filtered-products-list-by-routing.component-module';
import { FilteredProductListWithSubjectComponentModule } from './components/filtered-product-list-with-subject/filtered-product-list-with-subject.component-module';

;

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-list', component: ProductListComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'crypto', component: CryptoChipsComponent }, { path: 'public-holidays', component: PublicHolidayComponent }, { path: 'checkbox-categories', component: CategoryCheckboxListComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'login', component: LogInComponent }, { path: 'register', component: RegisterFormComponent }, { path: 'products/sort', component: SortedProductListComponent }, { path: 'products/:category', component: FilteredProductsListByRoutingComponent }, { path: 'products', component: FilteredProductListWithSubjectComponent }]), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, CryptoServiceModule, PublicHolidayComponentModule, PublicHolidaysServiceModule, CategoryCheckboxListComponentModule, CategoriesMenuComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeesServiceModule, LogInComponentModule, LoginServiceModule, RegisterFormComponentModule, UsersServiceModule, ProductDetailComponentModule, SortedProductListComponentModule, FilteredProductsListByRoutingComponentModule, FilteredProductListWithSubjectComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
