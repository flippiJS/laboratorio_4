import { Usuario } from './../../clases/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
    this.usuario = new Usuario('pepe', 'clave');
  }

  ngOnInit() {
  }

  ingresar() {
    console.log(this.usuario);
  }
}
