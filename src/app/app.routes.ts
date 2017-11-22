import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { HomeComponent } from './components/home/home.component'

//IMPORT Routes
import {USUARIO_ROUTES} from './routes/usuario.routes';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuarios/:id',
    component: UsuarioComponent,
    children:USUARIO_ROUTES


  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
