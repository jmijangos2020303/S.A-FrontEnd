import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(Usuarios:any, busqueda:any){
    if(!busqueda){
      return Usuarios
    }else{
      return Usuarios.filter(usuario=>{
        return usuario.oficio.toLowerCase().includes(busqueda.toLowerCase())
      })
    }

  }


}

