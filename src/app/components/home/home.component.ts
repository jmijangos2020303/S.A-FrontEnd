import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PublicacionesService]
})
export class HomeComponent implements OnInit {
   public mostrarPublicacion

  constructor(public _publicacion: PublicacionesService) { }

  ngOnInit(): void {
    this.obtenerPublicacion()
  }


  obtenerPublicacion(){
    this._publicacion.obtenerPublicaciones().subscribe(
      (respuesta)=>{
       console.log(respuesta.Publicaciones)
       this.mostrarPublicacion = respuesta.Publicaciones
    },(error)=>{
      console.log(<any>error)
      
    })
  }

}
