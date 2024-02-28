import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private appBackendUrl: string;
  private token : string;

  constructor(
    private http: HttpClient
  ) { 
    this.appBackendUrl = environment.backend_net_6.APP_BACKEND_URL,
    this.token = environment.backend_net_6.TOKEN
  }

  getListarProductosPorProveedor(id:number): Observable<Response>{
    debugger
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Response>(`${this.appBackendUrl}/Products/Search-Supplier${id}`,{ headers:headers });
    
  }

  getListarProductos(): Observable<Response>{
    debugger
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Response>(`${this.appBackendUrl}/Products/search`,{ headers:headers });
    
  }

}
