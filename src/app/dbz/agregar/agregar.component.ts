import { Component, Input, Output } from '@angular/core';
// import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }


  constructor(private dbzSvc: DbzService) {


  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  // agregar(event: Event) {
  //   event.preventDefault()
  //   console.log('Heyy!!!')
  // }
  agregar(event: any) {
    if (this.nuevo.nombre.trim().length == 0) {
      return
    }

    // debugger
    // this.onNuevoPersonaje.emit(this.nuevo)
    this.dbzSvc.agregarPersonaje(this.nuevo)
    console.log(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
