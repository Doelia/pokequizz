import { Component } from '@angular/core';
import {PokemonDicoService } from './pokemon-dico.service';
import { FindItComponent } from './find-it.component';

@Component({
  selector: 'pokequizz',
  template: `
  <div *ngIf="isLoad">
  <h1>Pokequizz</h1>
  <find-it [id]="id"></find-it>
  <button (click)="next()">Next</button>
  </div>
  `,
  providers: [PokemonDicoService],
  directives: [FindItComponent]
})

export class AppComponent {
    isLoad = false;
    id: number = 1;

    constructor(private dico: PokemonDicoService) {
        console.log('Hello');
        this.dico.isLoad(() => this.isLoad = true);
    }

    next() {
        this.id = this.random();

    }

    random() {
        let max = this.dico.getMaxNumber();
        console.log('max', max);
        return Math.floor((Math.random() * max) + 1);
    }
}
