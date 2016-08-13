import { Component } from '@angular/core';
import {PokemonDicoService } from './pokemon-dico.service';

@Component({
  selector: 'pokequizz',
  template: '<h1>My First Angular 2 App</h1>',
  providers: [PokemonDicoService]
})

export class AppComponent {
    constructor(private dico: PokemonDicoService) {
        console.log('Hello');
    }
}
