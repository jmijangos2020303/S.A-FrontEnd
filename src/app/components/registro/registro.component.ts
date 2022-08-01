import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  rol = [
    {roles: 'TRABAJADOR', nombre:'TRABAJADOR'},
    {roles: 'CLIENTE', nombre:'CLIENTE'}
  ]

  user: Usuario;
  repeatPass: string = '';

  constructor(private userRest: UsuarioService,
    public router: Router) {
    this.user = new Usuario(
      '','','','',0,'','','',''
    );


  }

  ngOnInit(): void {
  }

  checkPass(){
    if(this.repeatPass != this.user.password){
      return false;
    }else{
      return true;
    }
  }

  register(){
    this.userRest.register(this.user).subscribe({
      next: (res:any)=>{
        Swal.fire({
          title: 'Usuario creado satisfactoriamente, ya puedes logearte con el email '+ res.usuario.email,
          icon: 'success',
          timer: 4500
        });
        this.router.navigate(['/login']);
      },
      error: (err)=> Swal.fire({
        title: err.error.mensaje,
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      }),
    })

}

}
