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
var DonesComponent = (function () {
    function DonesComponent(dico) {
        this.dico = dico;
        this.onGood = new core_1.EventEmitter();
        this.list = [];
    }
    DonesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onGood.subscribe(function (id) {
            _this.list.push({ id: id, name: _this.dico.getName(id) });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DonesComponent.prototype, "onGood", void 0);
    DonesComponent = __decorate([
        core_1.Component({
            selector: 'dones',
            template: "\n    <div>\n        <p>\n        {{list.length}} pok\u00E9mons\n        </p>\n        <div class=\"el\" *ngFor=\"let poke of list\">\n            <div class=\"name\">#{{poke.id}} {{poke.name}}</div>\n            <div class=\"pogo pokemon-{{poke.id}} pogo\"></div>\n         </div>\n         <div class=\"clear\"></div>\n     </div>\n    "
        }), 
        __metadata('design:paramtypes', [pokemon_dico_service_1.PokemonDicoService])
    ], DonesComponent);
    return DonesComponent;
}());
exports.DonesComponent = DonesComponent;
//# sourceMappingURL=dones.component.js.map