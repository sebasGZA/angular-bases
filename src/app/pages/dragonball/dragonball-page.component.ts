import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball-page.component.html',
  // imports: [NgClass]
})
export class DragonballComponent {
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

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  })
}
