import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { AddCharacterComponent } from "../../components/dragonball/add-character/add-character.component";

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, AddCharacterComponent],
})
export class DragonballSuperComponent {

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001
    },
    {
      id: 2,
      name: 'Vegueta',
      power: 8500
    },
  ]);

  addCharacter(character: Character) {
    this.characters.update(list => [...list, character])
  }
}
