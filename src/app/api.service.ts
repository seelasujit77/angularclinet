import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url = `http://ecbd5cdabcbc.ngrok.io/`;

  

  constructor(private httpClient: HttpClient) { }

  postData(data):Observable<any>{
    return this.httpClient.post<any>(this.base_url + `user/insertUser`, data);
  }

}
