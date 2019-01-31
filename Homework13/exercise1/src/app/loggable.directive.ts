import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[loggable]'
})
export class LoggableDirective {

  constructor(public element: ElementRef) { }

  @HostListener('dblclick') dblClick(){
    console.log("DIV element has been clicked.")
  }

}
