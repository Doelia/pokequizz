import { Component, EventEmitter } from '@angular/core';
import {PokemonDicoService } from './pokemon-dico.service';
import { FindItComponent } from './find-it.component';
import { DonesComponent } from './dones.component';

@Component({
  selector: 'game',
  template: `
  <div class="find-it">
      <find-it *ngIf="id" [id]="id" (onGood)="onGood()"></find-it>
      <br>
      <button class="btn-primary btn" (click)="skip()">Passer au suivant</button>
   </div>
   <div>
       <h3>Pokémons trouvés</h3>
       <dones class="success" [onGood]="addToDone"></dones>
   </div>
   <div>
       <h3>Pokémons non trouvés</h3>
       <dones class="failed" [onGood]="addToFailed"></dones>
   </div>
  `,
  providers: [],
  directives: [FindItComponent, DonesComponent]
})

export class GameComponent {
    addToDone = new EventEmitter();
    addToFailed = new EventEmitter();
    id: number = 1;

    constructor(private dico: PokemonDicoService) {
        this.next();
    }

    onGood() {
        this.addToDone.emit(this.id);
        this.next();
    }

    skip() {
        this.addToFailed.emit(this.id);
        this.next();
    }

    next() {
        this.id = null;
        setTimeout(() => this.id = this.random(), 50);
    }

    random() {
        let max = 151;
        return Math.floor((Math.random() * max) + 1);
    }
}
