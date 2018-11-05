import { Component, OnInit } from '@angular/core';
import { SesionstateService } from '../servicios/sesionstate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private estado: SesionstateService, private router: Router ) { }

  ngOnInit() {
  }
 
  login(formulario: any){
    switch(formulario.correo.value){
      case "admin":
      this.estado.setEstado("admin");
      break;
      case "usuario":
      this.estado.setEstado("basic");
      break;
      default:
      this.estado.setEstado("notlogued");
    }
    this.router.navigate(['']);
    
  }
  logout(){
    this.estado.setEstado("notlogued");

    this.router.navigate(['']);
  }

}
