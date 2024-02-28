import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Proveedores } from '../Interfaces/proveedores';
import { Response } from '../Interfaces/response';


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private appBackendUrl: string;
  private token : string;

  constructor(
    private http: HttpClient
  ) { 
    this.appBackendUrl = environment.backend_net_6.APP_BACKEND_URL,
    this.token = environment.backend_net_6.TOKEN
  }

  getListarProveedores(): Observable<Response>{
    debugger
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Response>(`${this.appBackendUrl}/Suppliers/search`,{ headers:headers });
    
  }

}
