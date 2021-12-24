import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 700,
    },
    {
      nombre: 'Gokú',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
  ]

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }

  /**
   *
   */
  //Injeccion de dependencias
  constructor(private dbzSvc: DbzService) {


  }

  cambiarNombre(event: any) {
    console.log(event.target.value)
  }

  agregarNuevoPersonaje(Personaje: Personaje) {
    this.personajes.push(Personaje)
  }
}
