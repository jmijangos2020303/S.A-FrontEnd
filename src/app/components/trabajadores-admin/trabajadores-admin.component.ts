import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-trabajadores-admin',
  templateUrl: './trabajadores-admin.component.html',
  styleUrls: ['./trabajadores-admin.component.css'],
  providers: [UsuarioService]

})
export class TrabajadoresAdminComponent implements OnInit {

  public verTrabajadores;
  public token;


  constructor(public _trabajadores: UsuarioService) { }

  ngOnInit(): void {
  this.obtenerTrabajadores()
  }

  obtenerTrabajadores(){
    this._trabajadores.VerTrabajadores(this.token).subscribe(
      (respuesta)=>{
       console.log(respuesta.Trabajadores_Encontrados)
       this.verTrabajadores = respuesta.Trabajadores_Encontrados
    },(error)=>{
      console.log(<any>error)

    })
  }

}
