import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarruselComponent } from "./carrusel/carrusel.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { AcercaDeComponent } from "./acerca-de/acerca-de.component";
import { CtaComponent } from "./cta/cta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CarruselComponent, FormularioComponent, AcercaDeComponent, CtaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing-page';
}
