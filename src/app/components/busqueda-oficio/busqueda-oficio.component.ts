import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-busqueda-oficio',
  templateUrl: './busqueda-oficio.component.html',
  styleUrls: ['./busqueda-oficio.component.css']
})
export class BusquedaOficioComponent implements OnInit {

  public verTrabajadores;
  public busqueda;
  public search
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
