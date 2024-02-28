import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proveedores } from 'src/app/Core/Interfaces/proveedores';
import { ProveedoresService } from 'src/app/Core/Services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  listarProveedor: Proveedores[] = [];
  formProveedor: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _proveedoresService: ProveedoresService
  ) { 
    this.formProveedor = this.fb.group({
      nombre: ['', Validators.required],
      direcion: ['', Validators.required],
      contacto: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getListarProveedores();
  }
  
  getListarProveedores():void{
    debugger
    this._proveedoresService.getListarProveedores().subscribe(data => { 
      this.listarProveedor = data.data;
    })
  }

  guardarGrado():void{

  }
}
