import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nvregistrado',
  templateUrl: './nvregistrado.component.html',
  styleUrls: ['./nvregistrado.component.css']
})
export class NvregistradoComponent implements OnInit {

  public identidad;


  constructor(public _usuarioService: UsuarioService) {

    this.identidad = this._usuarioService.getIdentidad();

  }

  ngOnInit(): void {
  }

}
