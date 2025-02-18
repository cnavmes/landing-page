import { Routes } from '@angular/router';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

export const routes: Routes = [
  { path: 'carrusel', component: CarruselComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'acerca-de', component: AcercaDeComponent }
];
