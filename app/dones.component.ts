import { Input, Component, EventEmitter } from '@angular/core';
import {PokemonDicoService } from './pokemon-dico.service';

@Component({
    selector: 'dones',
    template: `
    <div>
        <p>
        {{list.length}} pokémons
        </p>
        <div class="el" *ngFor="let poke of list">
            <div class="name">#{{poke.id}} {{poke.name}}</div>
            <div class="pogo pokemon-{{poke.id}} pogo"></div>
         </div>
         <div class="clear"></div>
     </div>
    `
})
export class DonesComponent {
    @Input() onGood: EventEmitter<any> = new EventEmitter();
    list = [];

    constructor(private dico: PokemonDicoService) {

    }

    ngOnInit() {
        this.onGood.subscribe(id => {
            this.list.push({id: id, name: this.dico.getName(id)});
        });
    }

}
