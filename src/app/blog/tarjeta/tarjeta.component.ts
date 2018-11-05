import { Component, OnInit, Input } from '@angular/core';
import { Evento } from 'src/app/servicios/evento.service';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})


export class TarjetaComponent implements OnInit {
  @Input('datos') tarjeta: Evento;
  
  constructor() {  }

  ngOnInit() {
    
  }
  leerMas(parrafo: HTMLElement, tarjeta: Evento, enlace: HTMLElement){
    if(enlace.innerHTML=="Leer más..."){
    parrafo.innerHTML=tarjeta.getDescripcion();
    enlace.innerHTML="Leer menos."
    }else{
      parrafo.innerHTML=tarjeta.getSubDes()+"...";
      enlace.innerHTML="Leer más..."

    }
  }
  
  leerMenos(parrafo: HTMLElement, tarjeta: Evento, enlace: HTMLElement){
    parrafo.innerHTML=tarjeta.getSubDes();
  }

}
