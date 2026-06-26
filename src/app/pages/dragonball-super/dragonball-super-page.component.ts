// import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent],
  // imports: [NgClass]
})
export class DragonballSuperComponent {

  name = signal('')
  power = signal(0)

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

  addCharacter() {
    if (this.name() && this.power() > 0) {
      const character: Character = {
        id: this.characters().length + 1,
        name: this.name(),
        power: this.power()
      }
      this.characters.update((list) => [...list, character])
      this.resetFields()
    }
  }

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  })

  resetFields(){
    this.name.set('')
    this.power.set(0)
  }
}
