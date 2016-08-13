import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { PokemonComponent} from './pokemon.component';
import {PokemonDicoService } from './pokemon-dico.service';

@Component({
    selector: 'find-it',
    directives: [PokemonComponent],
    template: `
    <pokemon [id]="id"></pokemon>
    <input class="form-control" id="user_input" type="text" name="user_input" [(ngModel)]="user_input" (ngModelChange)="check()" />
    `
})
export class FindItComponent implements OnInit {
    user_input = "";
    @Input() id;
    @Output() onGood: EventEmitter<any> = new EventEmitter();

    constructor(private dico: PokemonDicoService) {
    }

    ngOnInit() {
        document.getElementById("user_input").focus();
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

    check() {
        let name = this.dico.getName(this.id);
        name = this.cleanName(name);

        let in_cleaned = this.cleanName(this.user_input);

        if (in_cleaned == name) {
            this.onGood.emit(null);
        }
    }


}
