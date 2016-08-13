import { Component } from '@angular/core';
import {PokemonDicoService } from './pokemon-dico.service';
import { FindItComponent } from './find-it.component';

@Component({
  selector: 'pokequizz',
  template: `
  <div *ngIf="isLoad">
  <h1>My First Angular 2 App</h1>
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
        this.id++;
    }
}
