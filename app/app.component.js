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
var find_it_component_1 = require('./find-it.component');
var AppComponent = (function () {
    function AppComponent(dico) {
        var _this = this;
        this.dico = dico;
        this.isLoad = false;
        this.id = 1;
        console.log('Hello');
        this.dico.isLoad(function () { return _this.isLoad = true; });
    }
    AppComponent.prototype.next = function () {
        this.id = this.random();
    };
    AppComponent.prototype.random = function () {
        var max = this.dico.getMaxNumber();
        console.log('max', max);
        return Math.floor((Math.random() * max) + 1);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pokequizz',
            template: "\n  <div *ngIf=\"isLoad\">\n  <h1>Pokequizz</h1>\n  <find-it [id]=\"id\"></find-it>\n  <button (click)=\"next()\">Next</button>\n  </div>\n  ",
            providers: [pokemon_dico_service_1.PokemonDicoService],
            directives: [find_it_component_1.FindItComponent]
        }), 
        __metadata('design:paramtypes', [pokemon_dico_service_1.PokemonDicoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map