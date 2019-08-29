import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-listado-de-usuarios',
  templateUrl: './listado-de-usuarios.component.html',
  styleUrls: ['./listado-de-usuarios.component.scss']
})
export class ListadoDeUsuariosComponent implements OnInit {
  ListadoDeUsuarios: Array<Usuario> = new Array<Usuario>();

  constructor() {
    let usuarioA = new Usuario('Franco', '123');
    let usuarioB = new Usuario('Jorge', '1234');

    this.ListadoDeUsuarios.push(usuarioA, usuarioB);
   }

  ngOnInit() {
  }

}
