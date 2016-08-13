import { Component } from '@angular/core';
import {PokemonDicoService } from './pokemon-dico.service';
import { PokemonComponent} from './pokemon.component';

@Component({
  selector: 'pokequizz',
  template: `
  <h1>My First Angular 2 App</h1>
  <pokemon id="1"></pokemon>
  `,
  providers: [PokemonDicoService],
  directives: [PokemonComponent]
})

export class AppComponent {
    constructor(private dico: PokemonDicoService) {
        console.log('Hello');
    }
}
