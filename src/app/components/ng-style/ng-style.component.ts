import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <!--  <p [ngStyle]="{'font-size':tamanio_text+'px'}">  una morma no muy elegante de aplicar los estilos -->
  <p [style.fontSize.px]="tamanio_text">
      Hola mundo esto es una etiqueta
    </p>
    <div class="row">
      <div class="btn btn-primary" (click)="aumentaTexto()"><i class="fa fa-plus"></i> Aúmentar</div>
      <div class="btn btn-danger" (click)="minusTexto()">Dismínuir</div>
    </div>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamanio_text:number=18;
  constructor() { }

  ngOnInit() {
  }
  aumentaTexto(){
    this.tamanio_text=this.tamanio_text+1;
  }

  minusTexto(){
    this.tamanio_text=this.tamanio_text-1;
  }

}
