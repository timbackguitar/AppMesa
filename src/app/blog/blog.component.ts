import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/servicios/tarjeta.service';
import { Evento } from '../servicios/evento.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  tarjetas: Evento[];
  constructor( public _tarjetas: TarjetaService) { 
    this.tarjetas = _tarjetas.getEventos();
  }

  ngOnInit() {
  }

}
