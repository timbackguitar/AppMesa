import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; 
@Injectable()
export class SesionstateService {
  estadosesion: string;

  constructor( private cookie: CookieService) {
    if(this.cookie.get("estado")==null){
    this.estadosesion = "notlogued";
    this.cookie.set("estado", this.estadosesion)
    }else{
      this.estadosesion = this.cookie.get("estado");
    }
   }
  setEstado(cadena: string){
    this.estadosesion = cadena;
    this.cookie.set("estado", this.estadosesion);
  }
  getEstado(){
    this.estadosesion = this.cookie.get("estado");
    return this.estadosesion;
  }
  logout(){
    this.estadosesion = "notlogued";
    this.cookie.delete("estado");
  }

}
