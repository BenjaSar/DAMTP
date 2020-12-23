import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDirectivaAtributo]'
})
export class DirectivaAtributoDirective {

 
  constructor(private el: ElementRef) {
   
  }

  @HostListener('mouseenter') onMouseEnter(){
   this.cambiarColor('blue');
  }


  @HostListener('mouseleave') onMouseLeave(){
   this.cambiarColor(null);
  }

  private cambiarColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
