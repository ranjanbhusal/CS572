import { Directive, ElementRef, Renderer2 , Input, OnInit} from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnInit {

  @Input() isVisible: boolean;
  constructor(private element: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(){
    if(!this.isVisible){
      // this.element.nativeElement.hidden = true;
      this.renderer2.setStyle(this.element.nativeElement,"display","none");
    }
  }
}
