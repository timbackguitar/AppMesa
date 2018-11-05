import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'angular-webstorage-service';
import { SesionstateService } from './servicios/sesionstate.service';
import { LoginComponent } from './login/login.component';
import { shallowEqual } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';


@NgModule({
  imports: [ StorageServiceModule ]
 })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  

  constructor( public sesion: SesionstateService, private login: LoginComponent, private router: Router){
    
   
    }

    tamVentana() {
      var tam = [0, 0];
      if (typeof window.innerWidth != 'undefined')
      {
        tam = [window.innerWidth,window.innerHeight];
      }
      else if (typeof document.documentElement != 'undefined'
          && typeof document.documentElement.clientWidth !=
          'undefined' && document.documentElement.clientWidth != 0)
      {
        tam = [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ];
      }
      else   {
        tam = [
            document.getElementsByTagName('body')[0].clientWidth,
            document.getElementsByTagName('body')[0].clientHeight
        ];
      }
      return tam;
    }
    menu(logo: HTMLElement, cabezera: HTMLElement, lateral: HTMLElement, main: HTMLElement, show: HTMLElement){
      if(this.tamVentana()[0]>920){
        if(logo.style.left=="0px" || logo.style.left=="0"){
          //cerrar
          logo.style.left="-230px";
          cabezera.style.left="0px";
          lateral.style.left="-230px";
          main.style.marginLeft="0px";
          show.style.display="none";
  
        }else{
          //abrir
          logo.style.left="0px";
          cabezera.style.left="230px";
          lateral.style.left="0px";
          main.style.marginLeft="230px"
  
        }
      }
      else{//aqui se hace diferente
        if(logo.style.left=="0px" || logo.style.left=="0"){
          //cerrar
          logo.style.left="-230px";
          cabezera.style.left="0px";
          lateral.style.left="-230px";
          main.style.marginLeft="0px";
          show.style.display="none";
  
        }else{
          //abrir
          logo.style.left="0px";
          cabezera.style.left="230px";
          lateral.style.left="0px";
          main.style.marginLeft="0px";
          show.style.display="block";
          
  
        }
      }
    
 
 
   }
    home(){
      this.router.navigate(['']);
    }
}
