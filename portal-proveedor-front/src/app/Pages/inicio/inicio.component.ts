import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  rolUsuario : string = '';
  esAprobador: boolean = false;

  constructor() { 
    const role = localStorage.getItem('rol');
      if (role != null) {
        this.rolUsuario = role;
        if (this.rolUsuario == 'aprobador') {
          this.esAprobador = true
        }
      };
  }

  ngOnInit(): void {
  }

}
