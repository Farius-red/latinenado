import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { map } from 'rxjs/operators';

export interface Usuario {
  FechaDeCreacion: any;
  apellido:string;
  clave:string;
  nombres:string;
  rol:string;
  telefono:number;
}

export interface Producto{
  Descripcion: string;
  NombreProducto:string;
  color:string;
  medidas:string;
  precio:number;
}

@Injectable()

export class ConexionService {

 private productosCollection: AngularFirestoreCollection<Producto>;
 private usuariosCollection: AngularFirestoreCollection<Usuario>;

 usuarios: Observable<Usuario[]>;
 productos: Observable<Producto[]>;

  constructor(private afs: AngularFirestore) { 
    this.usuariosCollection = afs.collection<Usuario>('usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.productosCollection=afs.collection<Producto>('productos')
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Producto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listarUsuario(){
    return this.usuarios;
  }

  listaProductos(){
    return this.productos;
  }

  agregarProductos(producto: Producto){
    this.productosCollection.add(producto);
  }
}
