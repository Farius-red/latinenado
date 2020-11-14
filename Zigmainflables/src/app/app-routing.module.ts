import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes landing page
import { InicioComponent } from './view/componentes/inicio/inicio.component';
import { LoginComponent } from './view/componentes/login/login.component';
import { NosotrosComponent } from './view/componentes/nosotros/nosotros.component';
import { RegistroComponent } from './view/componentes/registro/registro.component';
import { TiendaComponent } from './view/componentes/tienda/tienda.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'tienda', component: TiendaComponent},

  { path: '', component: InicioComponent , pathMatch: 'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
