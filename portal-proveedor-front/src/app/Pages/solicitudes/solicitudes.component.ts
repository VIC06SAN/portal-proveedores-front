import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/Core/Interfaces/producto';
import { Proveedores } from 'src/app/Core/Interfaces/proveedores';
import { ProductoService } from 'src/app/Core/Services/producto.service';
import { ProveedoresService } from 'src/app/Core/Services/proveedores.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  listarProveedor: Proveedores[] = [];
  listarProducto: Producto[] = [];

  formSolicitudes: FormGroup;
  selectedOption: string = '';
  selectedOption2: string = '';
  selectedOption3: number = 0;
  selectedOption4: number = 0;

  constructor(
    private fb: FormBuilder,
    private _proveedoresService: ProveedoresService,
    private _productoService: ProductoService
  ) {
    this.formSolicitudes = this.fb.group({
      proveedores_id: ['', Validators.required],
      producto: ['', Validators.required],
      cantidad: [0, Validators.required]
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


  guardarSolicitudes() :void {}

  onOptionSelected(event: any) {
    this.selectedOption = event.target.value;
  }
  onOptionSelected2(event: any) {
    this.selectedOption2 = event.target.value;
  }
  onOptionSelected3(event: any) {
    this.selectedOption3 = event.target.value;
  }
  
}
