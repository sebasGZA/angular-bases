import { Component } from '@angular/core';


interface Personaje {
  nombre: string,
  poder: number
}

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

  cambiarNombre(event: any) {
    console.log(event.target.value)
  }

  // agregar(event: Event) {
  //   event.preventDefault()
  //   console.log('Heyy!!!')
  // }
  agregar(event: any) {
    if (this.nuevo.nombre.trim().length == 0) {
      return
    }
    this.personajes.push(this.nuevo)
    console.log(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
