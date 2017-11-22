import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {UsuariosService} from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styles: []
})
export class UsuarioListadoComponent implements OnInit {
  usuarios:any[]=[];
  constructor(private user_service:UsuariosService,private router:Router,private activated:ActivatedRoute ) {

    this.usuarios=this.user_service.get();
    //obtener parametros de ruta padre
    this.activated.parent.params.subscribe(parametros=>{
      console.log(parametros);
    });

  }
  ngOnInit() {
  }
  editar(id_usuario:number){
    console.log(id_usuario);
    this.router.navigate(['usuarios/',id_usuario,'editar'])

  }
}
