import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { constantes } from '../navbar/menu_constantes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: any = [];
  filtroMenus: any[] = [];
  rol: string = '';

  constructor(
    private router: Router
  ){
    this.menu = constantes.menus;
    const role = localStorage.getItem('rol');
    console.log(role);
    if (role != null) {
      this.rol = role;
    }
    this.menu.forEach((element:any) => {
      const isRolPresente = element.roles.find((role:any)=>role == this.rol);
      if (isRolPresente != undefined) {
        this.filtroMenus.push(element);
      }
    });
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('rol');
    this.router.navigate(['/login'])
  }

  
}
