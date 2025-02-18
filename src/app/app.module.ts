import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    CarruselComponent,
    FormularioComponent,
    AcercaDeComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
