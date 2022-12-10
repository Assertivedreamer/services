import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class JsoService {
   private _URL = '../../assets/data/emp.json'











  constructor(private _http: HttpClient) { }
  getEmployee(){
    return  this._http.get(this._URL)
  }
  // getEmployee(): Observable<empInterface[]>{
  //   return  this._http.get<empInterface[]>(this._URL)
  // }
}
