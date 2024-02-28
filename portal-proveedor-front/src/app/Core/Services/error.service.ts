import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private toastr: ToastrService
  ) { }

  mensajeError(e: HttpErrorResponse){
    if (e.error.mensaje) {
      this.toastr.error(e.error.mensaje, 'Error');
    }else{
      this.toastr.error('Ups ocurrio un error comuniquese con el are de sistemas', 'Error');
    }
  }
  
}
