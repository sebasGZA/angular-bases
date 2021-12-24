import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personajes: Personaje[] = []
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // agregar(event: Event) {
  //   event.preventDefault()
  //   console.log('Heyy!!!')
  // }
  agregar(event: any) {
    if (this.nuevo.nombre.trim().length == 0) {
      return
    }
    console.log(this.nuevo)
    this.personajes.push(this.nuevo)
    console.log(this.personajes)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}