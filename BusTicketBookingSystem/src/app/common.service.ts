import { Injectable } from '@angular/core';
//import {Http,Response, Headers, RequestOptions} from '@angular/http';
// import { HttpResponse } from '@angular/common/http'; 
//import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { IBus } from 'src/busdetail';

import { IUser } from './bususer';
import { IDetails } from './details';
import { IUserDetails } from './userdetail';

export const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 

  private url = "http://localhost:8000/usr"
  private url2 = "http://localhost:8000/busdetail"
  private url3 = "http://localhost:8000/bookingdetail"
  private url4 = "http://localhost:8000/userdetail"

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url)
  }

  postUsers(usr:IUser):Observable<any>{
    return this.httpClient.post<any>(this.url,usr,httpOptions)
  }
  
  getBuses():Observable<IBus[]>{
    return this.httpClient.get<IBus[]>(this.url2)
  }

  postDetails(bookingdetail:IDetails):Observable<any>{
    return this.httpClient.post<any>(this.url3,bookingdetail,httpOptions)
  }
  postUserDetails(userdetail:IUserDetails):Observable<any>{
    return this.httpClient.post<any>(this.url4,userdetail,httpOptions)
  }
  
  

}
