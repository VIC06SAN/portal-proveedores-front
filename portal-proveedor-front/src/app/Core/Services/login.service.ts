import { Injectable } from '@angular/core';
import { Login } from '../Interfaces/login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(login:Login): Observable<any>{
    const result: any = this.http.post(`/login`, login);
    return result
  }
  
}
