import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listaUsuarios: Usuario[] = []
  usuario: Usuario | null = null

  falloNombre = true
  falloPassword = true



  constructor(private router:Router) { 
    
    let usuario1: Usuario = new Usuario("Pablosky", "XOXOGryffindor");
    this.listaUsuarios.push(usuario1)
    
    let usuario2: Usuario = new Usuario("Mery", "XOXOSlytherin");
    this.listaUsuarios.push(usuario2)
    
    let usuario3: Usuario = new Usuario("FdePablo", "elMejorProfe");
    this.listaUsuarios.push(usuario3)
  }

  ngOnInit() {
  }

  nombre: string=""
  password: string=""

  
  
  public autenticar() {

    for(let usuario of this.listaUsuarios) {

      if((this.nombre.match(usuario.nombre)) && (this.password.match(usuario.password))) {

        this.router.navigate(['/componentMenu', this.nombre, this.password])

      } 
     

        if((this.nombre != usuario.nombre) && (this.password == usuario.password)) {
          this.falloNombre = false
          this.falloPassword = true
          
  
        
        } 
        
        if((this.nombre == usuario.nombre) && (this.password != usuario.password)) {
         
          this.falloPassword = false
          this.falloNombre = true
          
        }


      }


    }

  }


