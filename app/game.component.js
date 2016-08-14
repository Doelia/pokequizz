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
var dones_component_1 = require('./dones.component');
var GameComponent = (function () {
    function GameComponent(dico) {
        this.dico = dico;
        this.addToDone = new core_1.EventEmitter();
        this.addToFailed = new core_1.EventEmitter();
        this.id = 1;
        this.curentIRandom = 0;
        this.list_random = [];
        this.list_nexts = [];
        this.maxPokemon = 151;
        this.next();
    }
    GameComponent.prototype.onGood = function () {
        this.addToDone.emit(this.id);
        this.next();
    };
    GameComponent.prototype.skip = function () {
        this.addToFailed.emit(this.id);
        this.next();
    };
    GameComponent.prototype.next = function () {
        var _this = this;
        if (this.curentIRandom >= this.list_random.length) {
            this.randomList();
            this.curentIRandom = 0;
        }
        this.id = null;
        var new_id = this.list_random[this.curentIRandom++];
        setTimeout(function () { return _this.id = new_id; }, 50);
        this.list_nexts = [];
        for (var i = 0; i < 10; i++) {
            this.list_nexts.push(this.list_random[this.curentIRandom + i]);
        }
    };
    GameComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    GameComponent.prototype.randomList = function () {
        var list = [];
        for (var i = 0; i <= this.maxPokemon; i++) {
            list.push(i);
        }
        list = this.shuffle(list);
        this.list_random = list;
        console.log('randomList', this.list_random);
    };
    GameComponent.prototype.random = function () {
        var max = this.maxPokemon;
        return Math.floor((Math.random() * max) + 1);
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'game',
            template: "\n  <div class=\"find-it\">\n      <find-it *ngIf=\"id\" [id]=\"id\" (onGood)=\"onGood()\"></find-it>\n      <br>\n      <button class=\"btn-primary btn\" (click)=\"skip()\">Passer au suivant</button>\n   </div>\n   <div>\n        <div *ngFor=\"let id of list_nexts\">\n            <div class=\"pogo pokemon-{{id}} pogo\"></div>\n        </div>\n   </div>\n   <div>\n       <h3>Pok\u00E9mons trouv\u00E9s</h3>\n       <dones class=\"success\" [onGood]=\"addToDone\"></dones>\n   </div>\n   <div>\n       <h3>Pok\u00E9mons non trouv\u00E9s</h3>\n       <dones class=\"failed\" [onGood]=\"addToFailed\"></dones>\n   </div>\n  ",
            providers: [],
            directives: [find_it_component_1.FindItComponent, dones_component_1.DonesComponent]
        }), 
        __metadata('design:paramtypes', [pokemon_dico_service_1.PokemonDicoService])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map