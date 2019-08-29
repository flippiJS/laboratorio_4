import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  ListadoDeUsuarios: Array<Usuario> = new Array<Usuario>();
  UsuarioForm = {usuario: null, clave: null, clave2: null};

  constructor() { }

  ngOnInit() {
  }

  AgregarUsuario(){
    const usuarioNuevo = new Usuario(this.UsuarioForm.usuario, this.UsuarioForm.clave);
    this.ListadoDeUsuarios.push(usuarioNuevo);
  }

}
