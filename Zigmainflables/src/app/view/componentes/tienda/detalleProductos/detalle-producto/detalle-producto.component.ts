
import { Productos } from './../../../../../modelo/productos.modelo';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


import {ProductosService} from '../../../../../services/productos/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  product: Productos;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        const id = params.id;
        this.product = this.productosService.getSeleccionarProducto(id);
    });
  }

}
