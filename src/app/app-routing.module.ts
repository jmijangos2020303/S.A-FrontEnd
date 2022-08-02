import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TrabajadoresAdminComponent } from './components/trabajadores-admin/trabajadores-admin.component';
import { BusquedaOficioComponent } from './components/busqueda-oficio/busqueda-oficio.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfilP', component: PerfilComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'vertrabajadores', component: TrabajadoresAdminComponent},
  {path: 'BusquedaOficio', component: BusquedaOficioComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
