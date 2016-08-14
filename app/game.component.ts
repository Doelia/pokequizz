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
        <div *ngFor="let id of list_nexts">
            <div class="pogo pokemon-{{id}} pogo"></div>
        </div>
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

    curentIRandom = 0;
    list_random = [];
    list_nexts = [];

    maxPokemon = 151;

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
        if (this.curentIRandom >= this.list_random.length) {
            this.randomList();
            this.curentIRandom = 0;
        }

        this.id = null;
        let new_id = this.list_random[this.curentIRandom++];
        setTimeout(() => this.id = new_id, 50);

        this.list_nexts = [];
        for (let i = 0; i < 10; i++) {
            this.list_nexts.push(this.list_random[this.curentIRandom+i]);
        }
    }

    private shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    randomList() {
        let list = [];
        for (let i=0; i <= this.maxPokemon; i++) {
            list.push(i);
        }
        list = this.shuffle(list);
        this.list_random = list;
        console.log('randomList', this.list_random);
    }

    random() {
        let max = this.maxPokemon;
        return Math.floor((Math.random() * max) + 1);
    }
}
