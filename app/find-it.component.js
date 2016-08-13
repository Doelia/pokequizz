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
var pokemon_component_1 = require('./pokemon.component');
var pokemon_dico_service_1 = require('./pokemon-dico.service');
var FindItComponent = (function () {
    function FindItComponent(dico) {
        this.dico = dico;
    }
    FindItComponent.prototype.ngOnInit = function () {
    };
    FindItComponent.prototype.cleanName = function (str) {
        return str.replace(/[áàãâä]/gi, "a")
            .replace(/[éè¨ê]/gi, "e")
            .replace(/[íìïî]/gi, "i")
            .replace(/[óòöôõ]/gi, "o")
            .replace(/[úùüû]/gi, "u")
            .replace(/[ç]/gi, "c")
            .replace(/[ñ]/gi, "n")
            .replace(/[^a-zA-Z0-9]/g, " ")
            .toUpperCase();
    };
    FindItComponent.prototype.check = function () {
        var name = this.dico.getName(this.id);
        name = this.cleanName(name);
        var in_cleaned = this.cleanName(this.user_input);
        if (in_cleaned == name) {
            console.log('OK!');
        }
        else {
            console.log('Nop.', name);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FindItComponent.prototype, "id", void 0);
    FindItComponent = __decorate([
        core_1.Component({
            selector: 'find-it',
            directives: [pokemon_component_1.PokemonComponent],
            template: "\n    <pokemon [id]=\"id\"></pokemon>\n    <input type=\"text\" name=\"user_input\" [(ngModel)]=\"user_input\" />\n    <button (click)=\"check()\">Check</button>\n    {{user_input}}\n    "
        }), 
        __metadata('design:paramtypes', [pokemon_dico_service_1.PokemonDicoService])
    ], FindItComponent);
    return FindItComponent;
}());
exports.FindItComponent = FindItComponent;
//# sourceMappingURL=find-it.component.js.map