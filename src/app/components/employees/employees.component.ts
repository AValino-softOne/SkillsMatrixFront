import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/modelInterfaces/IEmployee';
import { ListOfEmployeesService } from 'src/app/services/list-of-employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit
 {
  employees?:Array<IEmployee>;
  constructor(private _listofEmployeesService:ListOfEmployeesService) { }

  ngOnInit(): void
  {
    console.log("Employee component correctly uploaded");
    this.get();
    console.log(this.get);
  }

  get()
  {
    return this._listofEmployeesService.GetEmployees().subscribe(emp=>this.employees=emp);
  }

}
