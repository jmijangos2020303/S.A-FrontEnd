import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [PublicacionesService]
})
export class PrincipalComponent implements OnInit {

  public ArrayEmpresa

  constructor(public _publicaciones: PublicacionesService) { }

  ngOnInit(): void {
    this.listarpublicaciones()
  }

  listarpublicaciones(){
    this._publicaciones.obtenerPublicaciones().subscribe(
      (respuesta)=>{
       console.log(respuesta)
       this.ArrayEmpresa = respuesta.Publicaciones
      },(error)=>{
        console.log(<any>error)
      }
    )
  }

}
