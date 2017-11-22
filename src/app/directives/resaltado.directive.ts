import {ElementRef,Directive,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private e :ElementRef) {
    console.log("Directiva llamada");

  }
  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') hoverElement(){
      console.log();
        this.resaltar(this.nuevoColor);
  }
  @HostListener('mouseleave') hoverElementLeave(){
      //this.e.nativeElement.style.backgroundColor=null;
      this.resaltar(null);
  }
  private resaltar(color:string='red'){
    this.e.nativeElement.style.backgroundColor=color;
  }

}
