import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <button class = 'op' (click) = 'decreaseCounter()'>-</button>
  <span>{{counterValue}}</span>
  <button class = 'op' (click) = 'addCounter()'>+</button>
  `,
  styles: ['span{padding:20px}', 'span.op{background-color: green}']
})
export class CounterComponent implements OnInit {
  @Input() counterValue;

  @Output() counterChange: EventEmitter<number>;

  constructor() {
    this.counterChange = new EventEmitter();
   }

  addCounter () {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  decreaseCounter () {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit() {
  }

}
