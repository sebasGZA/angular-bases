import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../app/interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonBallService {
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

    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()))
    })

    addCharacter(character: Character) {
        this.characters.update(list => [...list, character])
        localStorage.setItem('characters', JSON.stringify(this.characters()))
    }

}