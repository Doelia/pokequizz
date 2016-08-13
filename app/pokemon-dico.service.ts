import {Http} from '@angular/http'
import { Injectable } from '@angular/core';

@Injectable()

export class PokemonDicoService {

    dico;

    constructor(private _http: Http) {
        console.log('Construct PokemonDicoService');
        this.loadDico();
    }

    getDico() {
        return this.dico;
    }

    loadDico() {
        return this._http.get("./pokemon-dico.json")
            .subscribe(v => {
                this.dico = v.json();
                console.log('dico: ', this.dico);
            });
    }
}
