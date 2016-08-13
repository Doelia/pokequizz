import { Component } from '@angular/core';
import {PokemonDicoService } from './pokemon-dico.service';
import { FindItComponent } from './find-it.component';

@Component({
  selector: 'pokequizz',
  template: `
  <div *ngIf="isLoad">
  <h1>Pokequizz</h1>
  <find-it *ngIf="id" [id]="id" (onGood)="onGood()"></find-it>
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
        this.dico.isLoad(() => this.isLoad = true);
    }

    onGood() {
        this.next();
    }

    next() {
        this.id = null;
        setTimeout(() => this.id = this.random(), 50);
    }

    random() {
        let max = this.dico.getMaxNumber();
        return Math.floor((Math.random() * max) + 1);
    }
}
