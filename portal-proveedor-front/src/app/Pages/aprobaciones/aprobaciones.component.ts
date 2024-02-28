import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprobaciones',
  templateUrl: './aprobaciones.component.html',
  styleUrls: ['./aprobaciones.component.css']
})
export class AprobacionesComponent implements OnInit {

  role:any = ''

  constructor() { 
    this.role = localStorage.getItem('rol');
  }

  ngOnInit(): void {
    this.esAprobado();
  }

  esAprobado(){
    console.log(this.role)
  }

}
