import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Esto permite usar @if y @for

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Importamos las herramientas básicas
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Esta variable guardará en qué paso del tutorial estamos
  pasoActual: number = 0; 

  // Esta función cambia el paso cuando hacemos clic
  cambiarPaso(nuevoPaso: number) {
    this.pasoActual = nuevoPaso;
  }

  HolaMundo: string = "";

  lanzarHolaMundo() {
    this.HolaMundo = "Hola Mundo"
  }
}
