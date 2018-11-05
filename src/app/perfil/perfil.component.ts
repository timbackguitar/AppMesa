import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: String;
  constructor(private servicio: UsuariosService) { }

  ngOnInit() {
    this.usuario = this.servicio.getUsers(-1);

  }
  muestraUsuario(cadena: HTMLInputElement){
    this.usuario = this.servicio.getUsers(+cadena.value);
    cadena.value="";
    return false;
  }


}
