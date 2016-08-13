import { Component } from '@angular/core';
import {PokemonDicoService } from './pokemon-dico.service';
import { GameComponent } from './game.component';

@Component({
  selector: 'pokequizz',
  template: `
  <div *ngIf="isLoad">
  <h1>Pokequizz</h1>
  <game></game>
  </div>
  `,
  providers: [PokemonDicoService],
  directives: [ GameComponent]
})

export class AppComponent {
    isLoad = false;

    constructor(private dico: PokemonDicoService) {
        this.dico.isLoad(() => this.isLoad = true);
    }


}
