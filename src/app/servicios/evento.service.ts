export class Evento {
    id: number;
    nombre: string;
    descripcion: string;
    sub_descripcion: string;
    img: string;
    tipo?: string;
    f_ini?: Date;
    f_fin?: Date;
    f_subida?: Date;
    asoc: String;
  
    constructor(_id: number, _nombre: string, _descripcion: string, _img: string, _tipo: string){
      this.id=_id;
      this.nombre=_nombre;
      this.img=_img;
      this.descripcion=_descripcion;
      this.asoc="Angulo C";
      //hacer lo de la img pa que tenga de nombre el id
      this.sub_descripcion=this.descripcion.substr(0, 100);
  
    }
    getNombre(){
      return this.nombre;
    }
    getDescripcion(){
      return this.descripcion;
    }
    getImg(){
      return this.img;
    }
    getId(){
      return this.id;
    }
    getTipo(){
      return this.tipo;
    }
    getAsoc(){
      return this.asoc;
    }
    getSubDes(){
      return this.sub_descripcion;
    }
  
  }