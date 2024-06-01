import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLightBox]'
})
export class LightBoxDirective {
@Input('appLightBox') highLightColor:string="yellow";
@Input() defaultColor:string="darkblue";
  constructor(private elemRef: ElementRef) 
  { 
    elemRef.nativeElement.style.border="2px solid ${this.defaultColor}"
  }
 
  @HostListener('mouseover') onMouseOver(){
    this.elemRef.nativeElement.style.border='2px solid ${this.highLightColor}'
  }
  
  @HostListener('mouseout') onMouseOut(){
    this.elemRef.nativeElement.style.border="2px solid  ${this.defaultColor}"
  }
}
