import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = []
  // @Input('data') personajes: Personaje[] = []


  /**
   *
   */
  constructor(private dbzSvc: DbzService) {

  }

  get personajes(): Personaje[] {
    return this.dbzSvc.personajes
  }
}
