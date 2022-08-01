import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {


  public url : String = 'https://contrataciones.herokuapp.com/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }


  obtenerPublicaciones():Observable<any>{

    return this._http.get(this.url+'/verPublics',{headers: this.headersVariable})
  }

  obtenerPublicacionesPorUsuario(token):Observable<any>{

   let headerconelToken = this.headersVariable.set('Authorization', token)
    return this._http.get(this.url +'/obtenerPublicacionUsuario',{headers: headerconelToken})
  }

  agregarPublicacion(token, modelo):Observable<any>{

    let parametros = JSON.stringify(modelo)
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.post(this.url+'/newPost', parametros,{headers: headersToken})
  }

  obtenerInfoEditarP(token):Observable<any>{
    let headerconelToken = this.headersVariable.set('Authorization', token )
    return this._http.get(this.url+"/usuarioped",{headers: headerconelToken})
  }

  editarPerfil(token, modelo):Observable<any>{
    let headerconelToken = this.headersVariable.set('Authorization', token )
    let parametros = JSON.stringify(modelo)

    return this._http.put(this.url + '/editarPerfil', parametros,{headers: headerconelToken})
  }
}
