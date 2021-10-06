import { Component } from '@angular/core';
import { Personaje } from '../interfaces/login.interface'

/* interface Usuario {
  nombre: string;
  edad: number;
} */


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

/*   public nuevo: Usuario = {
    nombre: "Leandro",
    edad: 25
  } */

  public nuevo: Personaje = {
      nombre: "",
      poder: 0
    }
    public vengadores: Personaje[] = [
      { 
        nombre: "Dr. Strange", 
        poder: 100 
      },
      { 
        nombre: "Loky", 
        poder: 100 
      }
    ];
    agregarJS(event: any){
      event.preventDefault();
      console.log("Agregar con JS");
    }
    agregar(){
      console.log(this.nuevo);
      if(this.nuevo.nombre.trim().length == 0){
        alert("El nombre no puede estar vacío");
        return;
      }
      this.vengadores.push(this.nuevo);
      this.nuevo = {
        nombre: "",
        poder: 0
      }
    }
    cambiarNombre(event: any){
      console.log(event.target.value);
    }

}
