import { Component, EventEmitter, OnInit , Output, Input } from '@angular/core';
import {PokemonDicoService } from './pokemon-dico.service';
import { FindItComponent } from './find-it.component';
import { TimerComponent} from './timer'

declare var $:any;

@Component({
  selector: 'game',
  template: `
  <timer seconds="3" (endEvent)="onEndTimer()"></timer>
  <div>
  {{nGood}} / {{nGood+nSkiped}}
  </div>
  <div class="row" style="margin-bottom: 20px;">
    <div class="col-xs-4">
        <find-it (onGood)="onGood()" (onSkip)="onSkip()" [check]="checkEvent"></find-it>
    </div>
    <div class="col-xs-4">
        <find-it (onGood)="onGood()" (onSkip)="onSkip()" [check]="checkEvent"></find-it>
    </div>
    <div class="col-xs-4">
        <find-it (onGood)="onGood()" (onSkip)="onSkip()" [check]="checkEvent"></find-it>
    </div>
   </div>

   <input class="form-control" id="user_input" type="text" name="user_input" [(ngModel)]="user_input" (ngModelChange)="check()" />
   <br>

   <div>
        <div *ngFor="let id of list_nexts">
            <div class="pogo pokemon-{{id}} pogo"></div>
        </div>
   </div>
  `,
  providers: [],
  directives: [FindItComponent, TimerComponent]
})

export class GameComponent implements OnInit {

    user_input;
    checkEvent: EventEmitter<any> = new EventEmitter();
    nGood = 0;
    nSkiped = 0;

    @Input() maxPokemon = 151;

    @Output() endGame: EventEmitter<any> = new EventEmitter();

    constructor(private dico: PokemonDicoService) {

    }

    onEndTimer() {
        console.log('THE END');
        let score = {
            nGood: this.nGood,
            nSkiped: this.nSkiped
        };
        this.endGame.emit(score);
    }

    onGood() {
        document.getElementById("user_input").focus();
        $('#user_input').val('');
        this.nGood++;
    }

    onSkip() {
        document.getElementById("user_input").focus();
        $('#user_input').val('');
        this.nSkiped++;
    }

    check() {
        this.checkEvent.emit(this.user_input);
    }

    ngOnInit() {
        document.getElementById("user_input").focus();
    }


}
