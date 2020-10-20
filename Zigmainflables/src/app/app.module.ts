import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//Dependencias fire base

import{AngularFireModule} from 'angularfire2';
import{environment} from '../environments/environment';
import{AngularFirestoreModule} from 'angularfire2/firestore';
import{AngularFireStorageModule} from 'angularfire2/storage';
import{AngularFireAuthModule} from 'angularfire2/auth';


//servicios 
import { ConexionService} from './services/conexion.service';

//Componentes//
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavComponent } from './componentes/nav/nav.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';

const routes: Routes=[
   
    
    { path: 'registro', component: RegistroComponent},
    { path: 'login', component: LoginComponent},
    { path: 'inicio', component: InicioComponent},
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'tienda', component: TiendaComponent},
    
    { path: '', component: InicioComponent , pathMatch:'full'},
    { path: '**', redirectTo:'/', pathMatch:'full'}
];
 
@NgModule({
declarations: [

AppComponent,
FooterComponent,
NavComponent,
LoginComponent,
RegistroComponent,
NosotrosComponent,
InicioComponent,
TiendaComponent
],
imports: [
RouterModule.forRoot(routes),
BrowserModule,
AppRoutingModule,
AngularFireModule.initializeApp(environment.firebase),
AngularFirestoreModule,
AngularFireStorageModule,
AngularFireAuthModule
],
providers: [
    ConexionService
],
bootstrap: [AppComponent]
})
export class AppModule { }