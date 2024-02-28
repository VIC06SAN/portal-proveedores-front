import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { LoginComponent } from './Pages/login/login.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { SolicitudesComponent } from './Pages/solicitudes/solicitudes.component';
import { ProveedoresComponent } from './Pages/proveedores/proveedores.component';
import { AprobacionesComponent } from './Pages/aprobaciones/aprobaciones.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'proveedores', component: ProveedoresComponent },
      { path: 'solicitudes', component: SolicitudesComponent },
      { path: 'aprobaciones', component: AprobacionesComponent }
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
