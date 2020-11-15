import { Productos } from './../../modelo/productos.modelo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Productos[] = [
{
  id: '2', imagen: '',
  Descripcion: 'Hermoso tobogan con Impresiones a comodidad del cliente',
  NombreProducto: 'Mini tobogan', color: 'Excogible por el cliente ',
  medidas: '4 alto x 5 fondo x 4.5 ancho',  precio: 4500000,
},
{
  id: '3', imagen: '',
  Descripcion: 'Hermoso tobogan con Forma de barco ',
  NombreProducto: 'Barco tobogan ', color: 'Excogible por el cliente ',
  medidas: '6 alto x 6 fondo x 4.5 ancho',  precio: 5500.000,

},
{
  id: '3', imagen: '',
  Descripcion: 'Castillo cocodrillo excelente inflable para espacios mas reducidos',
  NombreProducto: 'Castillo Cocodrillo', color: 'Excogible por el cliente ',
  medidas: '2.5 alto x 3 fondo x 3 ancho',  precio: 3300.000,
},

{
  id: '4', imagen: '',
  Descripcion: 'Castillo palmeras  excelente inflable para espacios mas reducidos',
  NombreProducto: 'Castillo palmeras', color: 'Excogible por el cliente ',
  medidas: '2.5 alto x 3 fondo x 3 ancho',  precio: 3300.000,
},

{
  id: '5', imagen: '',
  Descripcion: 'Castillo Tobogan excelente inflable para espacios mas reducidos incluye tobogan interno ',
  NombreProducto: 'Castillo Tobogan', color: 'Excogible por el cliente ',
  medidas: '3.5 alto x 4 fondo x 4 ancho',  precio: 3500.000,
},

{
  id: '6', imagen: '',
  Descripcion: 'triple tobogan  excelente inflable con tres toboganes internos ',
  NombreProducto: 'Triple tobogan', color: 'Excogible por el cliente ',
  medidas: '3.5 alto x 6 fondo x 4.5 ancho',  precio: 4800.000,
},
{
  id: '7', imagen: '',
  Descripcion: 'Castillo mini excelente inflable para espacios mucho mas  reducidos',
  NombreProducto: 'Castillo mini', color: 'Excogible por el cliente ',
  medidas: '2.5 alto x 2 fondo x 2 ancho',  precio: 2200.000,
},
  ];

  constructor() { }

listaDeProductos(){
  return this.productos;
}

getSeleccionarProducto(id: string){
  return this.productos.find(item => id === item.id);
}

}
