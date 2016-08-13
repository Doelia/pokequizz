import { Input, Component } from '@angular/core';

@Component({
    selector: 'pokemon',
    template: `
     <div class="number">#{{id}}</div>
     <div class="pogo pokemon-{{id}} pogo"></div>
    `
})
export class PokemonComponent {
    @Input() id;

}
