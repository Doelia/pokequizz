import {Http} from '@angular/http'
import { Injectable } from '@angular/core';

@Injectable()

export class PokemonDicoService {

    dico;
    isLoadPromise: Promise<any>;
    resolver;

    constructor(private _http: Http) {
        console.log('Construct PokemonDicoService');
        this.loadDico();
        this.isLoadPromise = new Promise((resolve, reject) =>
            this.resolver = resolve
        );
    }

    isLoad(callback) {
        return this.isLoadPromise.then(callback);
    }

    getDico() {
        return this.dico;
    }

    getName(id) {
        return this.dico[id];
    }

    loadDico() {
        return this._http.get("./assets/pokemon-dico.json")
            .subscribe(v => {
                this.dico = v.json();
                this.resolver();
                console.log('dico: ', this.dico);
            });
    }
}
