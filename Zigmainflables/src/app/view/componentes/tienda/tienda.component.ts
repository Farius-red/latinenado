import { Productos } from './../../../modelo/productos.modelo';
import { ProductosService } from './../../../services/productos/productos.service';

import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../../services/conexion.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos: any;
  productosCostantes: Productos;

  constructor(
    private conexion: ConexionService,
    private productosConstantes: ProductosService
    )
{
   this.productosConstantes.listaDeProductos();

   this.conexion.listaProductos().subscribe(producto => {
       this.productos = producto;
       console.log(this.productos);
    });
  }

  ngOnInit(): void {
  }

}

