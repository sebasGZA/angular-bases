// import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball-page.component.html',
  // imports: [NgClass]
})
export class DragonballComponent {

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
    {
      id: 3,
      name: 'Trunks',
      power: 8000
    },
    {
      id: 4,
      name: 'Yamcha',
      power: 500
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
