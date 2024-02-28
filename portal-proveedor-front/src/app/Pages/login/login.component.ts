import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Core/Services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/Core/Interfaces/login';
import { ErrorService } from 'src/app/Core/Services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  clave: string = '';

  loading: boolean = false;

  constructor(
    private _loginService: LoginService,
    private _errorService: ErrorService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(){

    console.log(this.usuario)

    if (this.usuario == '' || this.clave == '' ) {
      this.toastr.error('Todos los campos son obligatorios','Login error');

    }else if (this.usuario == 'aprobador' || this.clave == '12345' ) {
      this.toastr.success('Acceso Aprobador','Bienvenidos');
      localStorage.setItem('rol', 'aprobador');
      this.router.navigate(['/inicio'])

    } else if (this.usuario == 'colocador' || this.clave == '98765' ) {
      this.toastr.success('Acceso Colocador','Bienvenidos');
      localStorage.setItem('rol', 'colocador');
      this.router.navigate(['/inicio'])
      
    } else {
      this.toastr.error('Credenciales incorrectas','Login error');
    }


    // logica de autenticacion (falta backend)

    /* const login:Login ={
      usuario: this.usuario,
      clave: this.clave
    }
    console.log(login)

    this._loginService.login(login).subscribe({
      next: (data) => {
        this.toastr.success('Bienvenido al sistema');
        this.router.navigate(['/'])
      },
      error: (e:HttpErrorResponse) => {
        this._errorService.mensajeError(e)
        this.loading = false;
      }
    })*/
    
  }

}
