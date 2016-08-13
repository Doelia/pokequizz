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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var PokemonDicoService = (function () {
    function PokemonDicoService(_http) {
        var _this = this;
        this._http = _http;
        console.log('Construct PokemonDicoService');
        this.loadDico();
        this.isLoadPromise = new Promise(function (resolve, reject) {
            return _this.resolver = resolve;
        });
    }
    PokemonDicoService.prototype.isLoad = function (callback) {
        return this.isLoadPromise.then(callback);
    };
    PokemonDicoService.prototype.getDico = function () {
        return this.dico;
    };
    PokemonDicoService.prototype.getName = function (id) {
        return this.dico[id];
    };
    PokemonDicoService.prototype.getMaxNumber = function () {
        return Object.keys(this.dico).length;
    };
    PokemonDicoService.prototype.loadDico = function () {
        var _this = this;
        return this._http.get("./assets/pokemon-dico.json")
            .subscribe(function (v) {
            _this.dico = v.json();
            _this.resolver();
            // console.log('dico: ', this.dico);
        });
    };
    PokemonDicoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PokemonDicoService);
    return PokemonDicoService;
}());
exports.PokemonDicoService = PokemonDicoService;
//# sourceMappingURL=pokemon-dico.service.js.map