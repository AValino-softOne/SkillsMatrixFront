import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { GlobalVars } from '../globalVars/globalVars';
import { IEmployee } from '../modelInterfaces/IEmployee';


@Injectable({
  providedIn: 'root'
})
export class ListOfEmployeesService 
{
  private _skillsMatrixUrl:string=GlobalVars.urlDir;
  private _hhtp:HttpClient;
  
  httpOptions = 
  {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(http:HttpClient) 
  {
    this._hhtp=http;
  }

  GetEmployees():Observable<Array<IEmployee>>
  {
    return this._hhtp.get<IEmployee[]>(this._skillsMatrixUrl)
  }
}
