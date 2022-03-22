import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/entidades/videojuego';
import {Router} from '@angular/router'

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  listaVideojuegos: Videojuego[] = []
  videojuego: Videojuego | null = null

  id: number=0;
  titulo: string="";
  compania: string="";
  valoracionMedia: number=0;
  icono: string="";

  constructor(private router:Router) { 
    let videojuego1: Videojuego = new Videojuego("Parchís", "Gameberry Labs", 10, "assets/img/parchis.png")
    this.listaVideojuegos.push(videojuego1)
    let videojuego2: Videojuego = new Videojuego("Halo Reach", "Bungie", 10, "assets/img/halo.png")
    this.listaVideojuegos.push(videojuego2)
  }

  public seleccionar(videojuego: Videojuego) : void {

    this.id = videojuego.id;
    this.titulo = videojuego.titulo;
    this.compania = videojuego.compania;
    this.valoracionMedia = videojuego.valoracionMedia;
    this.icono=videojuego.icono;
    this.router.navigate(['/componentDetalles', this.id, this.titulo, this.compania, this.valoracionMedia, this.icono])
    
  }

  ngOnInit() {
  }

}
