import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
    template: `{{remaningSeconds}} secondes`,
    selector: 'timer'
})
export class TimerComponent implements OnInit {

    @Input() seconds = 120;
    @Output() endEvent: EventEmitter<any> = new EventEmitter();

    remaningSeconds;

    contructor() {

    }

    down() {
        this.remaningSeconds--;
        if (this.remaningSeconds <= 0) {
            this.endEvent.emit(null);
        } else {
            setTimeout((() => this.down()), 1000);
        }
    }

    ngOnInit() {
        this.remaningSeconds = this.seconds;
        this.down();
    }



}
