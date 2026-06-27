import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../app/interfaces/character.interface';

const loadFromLoalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters')
    return characters ? JSON.parse(characters) : []
}

@Injectable({ providedIn: 'root' })
export class DragonBallService {
    characters = signal<Character[]>(loadFromLoalStorage());

    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()))
    })

    addCharacter(character: Character) {
        this.characters.update(list => [...list, character])
        localStorage.setItem('characters', JSON.stringify(this.characters()))
    }

}