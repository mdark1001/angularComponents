import {  Routes } from '@angular/router';
import { UsuarioNuevoComponent } from '../components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from '../components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from '../components/usuario/usuario-detalle.component';
import { UsuarioListadoComponent } from '../components/usuario/usuario-listado.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
  { path: 'listado', component: UsuarioListadoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'listado' }
];
