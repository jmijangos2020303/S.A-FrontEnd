import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from '@rinminase/ng-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NvregistradoComponent } from './components/nvregistrado/nvregistrado.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { TrabajadoresAdminComponent } from './components/trabajadores-admin/trabajadores-admin.component';
import { BusquedaPipe } from './pipes/busqueda.pipe';
import { BusquedaOficioComponent } from './components/busqueda-oficio/busqueda-oficio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    HomeComponent,
    PerfilComponent,
    NvregistradoComponent,
    PrincipalComponent,
    TrabajadoresAdminComponent,
    BusquedaPipe,
    BusquedaOficioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
