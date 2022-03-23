import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  nombre: string="";
  password: string="";
  id: number=0;
  titulo: string="";
  compania: string="";
  valoracion: number=0;
  icono: string="";
  constructor(route:ActivatedRoute, private router:Router) {
    this.id = route.snapshot.params["id"]
    this.titulo = route.snapshot.params["titulo"]
    this.compania = route.snapshot.params["compania"]
    this.valoracion = route.snapshot.params["valoracion"]
    this.icono = route.snapshot.params["icono"]
    this.nombre=route.snapshot.params["nombre"]
    this.password=route.snapshot.params["password"]    
   }

  ngOnInit() {
  }

}
