import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { PokemonComponent} from './pokemon.component';
import {PokemonDicoService } from './pokemon-dico.service';

@Component({
    selector: 'find-it',
    directives: [PokemonComponent],
    template: `
    <pokemon [id]="current_id"></pokemon>
    <button class="btn-primary btn" (click)="skip()">Passer (-1)</button>
    `
})
export class FindItComponent implements OnInit {

    list_random = [];
    user_input = "";
    current_id: number = 1;
    curentIRandom = 0;

    @Input() maxPokemon = 151;
    @Input() check: EventEmitter<any>;

    @Output() onGood: EventEmitter<any> = new EventEmitter();
    @Output() onSkip: EventEmitter<any> = new EventEmitter();

    constructor(private dico: PokemonDicoService) {

    }

    ngOnInit() {
        this.next();
        this.check.subscribe((user_input) => {
            let name = this.dico.getName(this.current_id);
            name = this.cleanName(name);

            let in_cleaned = this.cleanName(user_input);

            if (in_cleaned == name) {
                this.next();
                this.onGood.emit(null);
            }
        })
    }

    skip() {
        this.next();
        this.onSkip.emit();
    }

    next() {
        var last_name = this.dico.getName(this.current_id);
        if (this.curentIRandom >= this.list_random.length) {
            this.randomList();
            this.curentIRandom = 0;
        }

        this.current_id = this.list_random[this.curentIRandom++];
    }


    randomList() {
        let list = [];
        for (let i=1; i <= this.maxPokemon; i++) {
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


    private cleanName(str) {
        return  str.replace(/[áàãâä]/gi,"a")
         .replace(/[éè¨ê]/gi,"e")
         .replace(/[íìïî]/gi,"i")
         .replace(/[óòöôõ]/gi,"o")
         .replace(/[úùüû]/gi, "u")
         .replace(/[ç]/gi, "c")
         .replace(/[ñ]/gi, "n")
         .replace(/[^a-zA-Z0-9]/g," ")
         .toUpperCase();
    }




}
