import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { AddCharacterComponent } from "../../components/dragonball/add-character/add-character.component";
import { DragonBallService } from '../../../services/dragonball.service';
@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, AddCharacterComponent],
})
export class DragonballSuperComponent {
  // constructor(private dragonBallService: DragonBallService) { }

  dragonBallService = inject(DragonBallService)
}
