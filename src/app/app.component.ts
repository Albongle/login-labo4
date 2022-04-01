import { Component } from '@angular/core';
import { Usuario } from './Entidades/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Login';
  usuario:Usuario;
  constructor(){
    this.usuario = new Usuario();
  }


}
