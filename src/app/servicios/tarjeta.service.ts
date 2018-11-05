import { Injectable } from '@angular/core';
import { Evento } from './evento.service';
@Injectable({
  providedIn: 'root'
})


export class TarjetaService {
  eventos: Evento[]=[
    new Evento(1, "Karting en Campillos", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices, libero non dictum faucibus, metus dolor pellentesque magna, vel pellentesque augue orci nec tortor. In hac habitasse platea dictumst. Curabitur ut lectus ex. Aenean ac metus viverra, imperdiet lacus vel, fermentum sapien. Praesent a ultrices nibh. Cras luctus convallis felis vitae consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam blandit nisi ut ante hendrerit faucibus. Pellentesque in magna eget tortor luctus feugiat vel sed diam. Sed ultrices lobortis lectus cursus pellentesque. Pellentesque placerat mattis convallis. Ut egestas erat non dictum elementum. Suspendisse at ipsum ut ex tempus porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec mollis auctor sem. Etiam eleifend in dui vel viverra. Suspendisse magna augue, sollicitudin a justo nec, dictum egestas libero. Vivamus vel dui ex. Vivamus in ultricies ligula. Vestibulum ac diam quis libero tempus sollicitudin. Curabitur faucibus elementum tincidunt. Quisque non placerat sem. Nulla quis enim ex. Etiam et mollis lorem. Sed quis lacinia est. Mauris consequat, enim quis vulputate scelerisque, elit orci convallis urna, nec hendrerit eros sem id metus. Nullam varius elit enim, eu aliquet risus aliquet eu. Sed quis porttitor arcu. Quisque id felis lacinia, aliquet justo eget, auctor odio. Nulla in pharetra turpis. Mauris imperdiet, velit id blandit congue, felis ante pretium nulla, id interdum orci elit elementum lorem.", "../../assets/img/eventos/ejemplo.jpg", "curso"),
    new Evento(2, "Evento 2", "descripcion larga 2", "../../assets/img/eventos/ejemplo2.jpg", "curso"),
    new Evento(3, "Evento 3", "descripcion larga 3", "../../assets/img/eventos/ejemplo3.jpeg", "curso"),
    new Evento(4, "Evento 4", "descripcion larga 4", "../../assets/img/eventos/ejemplo4.jpg", "curso"),
    new Evento(5, "Evento 5", "descripcion larga 5", "../../assets/img/eventos/ejemplo5.jpg", "curso"),
  ];
  constructor() {
   }
   getEventos(){
     return this.eventos;
   }
}
