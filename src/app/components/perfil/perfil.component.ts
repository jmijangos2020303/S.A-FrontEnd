import { Component, OnInit } from '@angular/core';
import { publicacion } from 'src/app/models/publicacion.model';
import { Usuario } from 'src/app/models/usuario.model';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [UsuarioService, PublicacionesService]
})
export class PerfilComponent implements OnInit {

  public identidad
  public token
  public listadoPublicaciones
  public agregarpublicacion: publicacion
  public editarPerfil: Usuario

  constructor(public _datos: UsuarioService, public _publicaciones: PublicacionesService) {

    this.agregarpublicacion = new publicacion('',null)
    this.editarPerfil = new Usuario('','','','',0,'','','','')
    this.identidad=  this._datos.getIdentidad()
    this.token = this._datos.getToken()

   }

  ngOnInit(): void {
   this.listPublicHechoUsurio();
  }


  listPublicHechoUsurio(){
    this._publicaciones.obtenerPublicacionesPorUsuario(this.token).subscribe(
    (respuesta)=>{
      console.log(respuesta.publicaciones)
      this.listadoPublicaciones = respuesta.publicaciones
    },(error)=>{
    console.log(<any>error)
    })
  }

  agregarPublicacion(){
    this._publicaciones.agregarPublicacion(this.token, this.agregarpublicacion).subscribe(
      (respuesta)=>{
       console.log(respuesta)
       this.agregarpublicacion = new publicacion('', null)
       this.listPublicHechoUsurio()
      },(error)=>{
         console.log(<any>error)
      }
    )
  }

  geteditarusuario(){
    this._publicaciones.obtenerInfoEditarP(this.token).subscribe(
      (respuesta)=>{
      console.log(respuesta.usuariop)
      this.editarPerfil = respuesta.usuariop
      },(error)=>{
        console.log(<any>error)
      })
  }

  editarperfil(){
    this._publicaciones.editarPerfil(this.token, this.editarPerfil).subscribe(
      (respuesta)=>{
      console.log(respuesta)
      this.listPublicHechoUsurio()
      },(error)=>{
        console.log(<any>error)

      })
  }

  eliminarperfil(id){
    this. _datos.eliminarCuenta(id).subscribe(
      (respuesta)=>{
      console.log(respuesta)
      },(error)=>{
        console.log(<any>error)
      }
    )
  }

  limpiarToken(){
    this._datos.clearToken();
  }


}




