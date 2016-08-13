import {Component, Input, OnInit} from '@angular/core';
import { PokemonComponent} from './pokemon.component';
import {PokemonDicoService } from './pokemon-dico.service';

@Component({
    selector: 'find-it',
    directives: [PokemonComponent],
    template: `
    <pokemon [id]="id"></pokemon>
    <input type="text" name="user_input" [(ngModel)]="user_input" />
    <button (click)="check()">Check</button>
    {{user_input}}
    `
})
export class FindItComponent implements OnInit {
    user_input;
    name;
    @Input() id;

    constructor(private dico: PokemonDicoService) {
    }

    ngOnInit() {
        this.name = this.dico.getName(this.id);
    }

    check() {
        if (this.user_input == this.name) {
            console.log('OK!');
        } else {
            console.log('Nop.');
        }
    }


}
