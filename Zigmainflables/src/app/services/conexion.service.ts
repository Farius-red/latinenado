
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { map } from 'rxjs/operators';

// modelo
import { Productos } from './../modelo/productos.modelo';



export interface Usuario {
  FechaDeCreacion: any;
  apellido: string;
  clave: string;
  nombres: string;
  rol: string;
  telefono: number;
}



@Injectable()

export class ConexionService {

 private productosCollection: AngularFirestoreCollection<Productos>;
 private usuariosCollection: AngularFirestoreCollection<Usuario>;

 usuarios: Observable<Usuario[]>;
 productos: Observable<Productos[]>;

  constructor(private afs: AngularFirestore) {
    this.usuariosCollection = afs.collection<Usuario>('usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.productosCollection = afs.collection<Productos>('productos');
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Productos;
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

  agregarProductos(producto: Productos){
    this.productosCollection.add(producto);
  }
}
