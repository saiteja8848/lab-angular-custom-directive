import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private el: ElementRef) {
    console.log(el);
    el.nativeElement.style.color = "red"
    el.nativeElement.style.backgroundColor = "green"
    el.nativeElement.innerText += "--  rendered by custom directive"
  }
}
