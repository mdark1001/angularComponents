import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../services/usuarios.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios:any[]=[];
  constructor(private user_service:UsuariosService,private router:Router ) {

    this.usuarios=this.user_service.get();

  }

  ngOnInit() {
  }

  detalle(id_usuario:number){
    console.log(id_usuario);
  }

}
