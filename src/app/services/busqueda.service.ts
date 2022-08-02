import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  public url : String = 'https://contrataciones.herokuapp.com/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public headersToken = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  public token;
  public identidad;
  constructor(public _http: HttpClient) { }

  VerTrabajadores() : Observable<any> {

    return this._http.get(this.url + '/verTrabajadores', {});
  }

}
