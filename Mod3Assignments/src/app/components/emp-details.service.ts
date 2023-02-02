import { Injectable } from '@angular/core';
import { employees } from './employee-list';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpDetailsService {

  constructor(private http:HttpClient) { }

  url = "./assets/data/employeeData.json";

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url) ;
  }
}
