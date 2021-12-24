import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }

  get personajes(): Personaje[] {
    return this.dbzSvc.personajes
  }

  //Injeccion de dependencias
  constructor(private dbzSvc: DbzService) {
    // this.personajes = this.dbzSvc.personajes

  }
}
