import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncioComponent } from './componentes/incio/incio.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { LugarComponent } from './componentes/lugar/lugar.component';
import { CancionesComponent } from './componentes/canciones/canciones.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PersonalidadComponent } from './componentes/personalidad/personalidad.component';
import { PersosComponent } from './componentes/persos/persos.component';



@NgModule({
  declarations: [
    AppComponent,
    IncioComponent,
    AcercaDeMiComponent,
    NavBarComponent,
    DescripcionComponent,
    LugarComponent,
    CancionesComponent,
    PersonalidadComponent,
    CitasComponent,
    ProyectosComponent,
    PieComponent,
    PersosComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
