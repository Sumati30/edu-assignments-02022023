import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmpDirective]'
})
export class EmpDirectiveDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter')onMouseMove(){
    this.elementRef.nativeElement.style.fontWeight='bold';
    this.elementRef.nativeElement.style.fontSize='20px';
    this.elementRef.nativeElement.style.backgroundColor='yellow';
  }
  @HostListener('mouseleave')onMouseOut(){
    this.elementRef.nativeElement.style.fontWeight='normal';
    this.elementRef.nativeElement.style.fontSize='initial';
    this.elementRef.nativeElement.style.backgroundColor='initial';
  }


}
