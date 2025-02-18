import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [
    BrowserModule,
    CarruselComponent,
    FormularioComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
