import { Input, Component } from '@angular/core';

@Component({
    selector: 'pokemon',
    template: `
     <div class="number">#{{id}}</div>
     <div class="pogo pokemon-{{id}} pogo-l"></div>
    `,
    styles: [
        '.pogo { margin-bottom: 20px; }'
    ]
})
export class PokemonComponent {
    @Input() id;

}
