import { Component, OnInit } from '@angular/core';
import { EmpDetailsService } from '../emp-details.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmpDetailsService) { 
   // this.employees = this.empService.getEmployees();
  }
     
  employees:any=[];
  ngOnInit(): void {
    this.empService.getEmployees().subscribe(data => this.employees = data)
  }
  
  // setEmployees(){
  //   this.employees = this.empService.getEmployees();
  //   console.log('27', this.employees)
  // }
}
