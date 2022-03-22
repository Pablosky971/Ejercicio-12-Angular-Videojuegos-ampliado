import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: number=0;
  titulo: string="";
  compania: string="";
  valoracion: number=0;
  icono: string="";
  constructor() { }

  ngOnInit() {
  }

}
