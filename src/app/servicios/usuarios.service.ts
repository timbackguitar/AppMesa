import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios: string[] = [
    "usuario1",
    "usuario2",
    "usuario3",
    "usuario4",
    "usuario5",
    "usuario6",
    "usuario7",

  ];
  constructor() { }
  getUsers(usuario: number){
    if (usuario == -1 || usuario==null){
      return "";
    }else{
      return this.usuarios[usuario];
    }
    
  }
}
