import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  public usuarioModel: Usuario;

  constructor(private _usuarioService: UsuarioService, private _router: Router) {

    this.usuarioModel = new Usuario(
      '','','','',0,'','','',''
    )

  }

  ngOnInit(): void {
    console.log(this._usuarioService.getToken());

  }

  getToken(){
    this._usuarioService.login(this.usuarioModel, "true").subscribe(
      (response)=>{
        console.log(response.token);
        localStorage.setItem("token", response.token);
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  getTokenPromesa(): Promise<any>{
    return new Promise((resolve, rejects)=>{
      this._usuarioService.login(this.usuarioModel, "true").subscribe(
        (response)=>{
          localStorage.setItem("token", response.token);
          resolve(response);
        },
        (error)=>{
          console.log(<any>error);
        }
      )
    })
  }

  login(){
    this._usuarioService.login(this.usuarioModel).subscribe(
      (response)=>{

        this.getTokenPromesa().then(respuesta=>{
        console.log(response.usuario);
        localStorage.setItem('identidad', JSON.stringify(response.usuario))

        if(response.usuario.rol == 'TRABAJADOR'){
          this._router.navigate(['/perfilP'])
        }

        });
      },
      (error)=>{
        console.log(<any>error);
      }
    );
  }


}
