
import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Dependencias fire base

import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';


// servicios

import {ConexionService} from './services/conexion.service';

   // Componentesview/
import { AppComponent } from './app.component';
import { FooterComponent } from './view/componentes/footer/footer.component';
import { NavComponent } from './view/componentes/nav/nav.component';
import { LoginComponent } from './view/componentes/login/login.component';

import { RegistroComponent } from './view/componentes/registro/registro.component';
import { NosotrosComponent } from './view/componentes/nosotros/nosotros.component';
import { InicioComponent } from './view/componentes/inicio/inicio.component';

import { TiendaComponent } from './view/componentes/tienda/tienda.component';
import { FormulariosComponent } from './view/componentes/formularios/formularios/formularios.component';

// Componentes modulos
import { HeadermodulosComponent } from './view/modulos/headermodulos/headermodulos.component';
import { MenulateralmodulosComponent } from './view/modulos/menulateralmodulos/menulateralmodulos.component';
import {UsuariosComponent} from './view/modulos/usuarios/usuarios.component';

// Componentes Modulos
import { VentasComponent } from './view/modulos/ventas/ventas.component';
import { EmpleadosComponent } from './view/modulos/usuarios/empleados/empleados.component';
import { TemplatemodulosComponent } from './view/modulos/templatemodulos/templatemodulos.component';
import { ContenidoModulosComponent } from './view/modulos/contenido-modulos/contenido-modulos.component';
import { DetalleProductoComponent } from './view/componentes/tienda/detalleProductos/detalle-producto/detalle-producto.component';




@NgModule({
declarations: [

AppComponent,
FooterComponent,
NavComponent,
LoginComponent,

RegistroComponent,
NosotrosComponent,
InicioComponent,
TiendaComponent,

FormulariosComponent,
UsuariosComponent,
VentasComponent,
EmpleadosComponent,

HeadermodulosComponent,
TemplatemodulosComponent,
MenulateralmodulosComponent,
ContenidoModulosComponent,
DetalleProductoComponent,
],

imports: [

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
