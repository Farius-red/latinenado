import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../../services/conexion.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos: any;

  constructor(private conexion: ConexionService) {

   this.conexion.listaProductos().subscribe(producto => {
       this.productos = producto;
       console.log(this.productos);
    });
  }

  ngOnInit(): void {
  }

}

