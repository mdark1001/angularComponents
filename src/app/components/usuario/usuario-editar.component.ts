import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styles: []
})
export class UsuarioEditarComponent implements OnInit {
  private id_usuario:number;
  constructor(private activated: ActivatedRoute) {

    this.activated.parent.params.subscribe(parametros => {
      console.log(parametros);
      this.id_usuario=parametros.id;
    });
    
  }

  ngOnInit() {
  }

}
