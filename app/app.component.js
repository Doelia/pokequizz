"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pokemon_dico_service_1 = require('./pokemon-dico.service');
var pokemon_component_1 = require('./pokemon.component');
var AppComponent = (function () {
    function AppComponent(dico) {
        this.dico = dico;
        console.log('Hello');
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pokequizz',
            template: "\n  <h1>My First Angular 2 App</h1>\n  <pokemon id=\"1\"></pokemon>\n  ",
            providers: [pokemon_dico_service_1.PokemonDicoService],
            directives: [pokemon_component_1.PokemonComponent]
        }), 
        __metadata('design:paramtypes', [pokemon_dico_service_1.PokemonDicoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map