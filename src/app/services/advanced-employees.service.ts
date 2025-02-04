import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdvancedEmployeeModel } from '../models/advanced-employee.model';
import { ApiResponse } from '../models/apiresponse.model';
import { EmployeeResponse } from '../models/employee-response.model';
import { map } from 'rxjs/operators';

@Injectable()
export class AdvancedEmployeesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<AdvancedEmployeeModel[]> {
    return this._httpClient
      .get<ApiResponse<EmployeeResponse[]>>(
        'https://dummy.restapiexample.com/api/v1/employees'
      )
      .pipe(
        map((response: ApiResponse<EmployeeResponse[]>) => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
            return {
              name: employeeResponse.employee_name,
              id: employeeResponse.id,
              salary: employeeResponse.employee_salary,
              age: employeeResponse.employee_age,
              image: employeeResponse.profile_image,
            };
          });
        })
      );
  }

  getOne(id: string): Observable<AdvancedEmployeeModel> {
    return this._httpClient
      .get<ApiResponse<EmployeeResponse>>(
        'https://dummy.restapiexample.com/api/v1/employee/' + id
      )
      .pipe(
        map((response: ApiResponse<EmployeeResponse>) => {
          return {
            name: response.data.employee_name,
            id: response.data.id,
            salary: response.data.employee_salary,
            age: response.data.employee_age,
            image: response.data.profile_image,
          };
        })
      );
  }

  delete(id: string): Observable<AdvancedEmployeeModel> {
    return this._httpClient.delete<AdvancedEmployeeModel>(
      'https://dummy.restapiexample.com/api/v1/delete/' + id
    );
  }
}
