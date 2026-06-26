// import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
  // imports: [NgClass]
})
export class CharacterListComponent {
  characters = input.required<Character[]>()
  listName = input.required<string>()
}
