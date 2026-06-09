import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { ListaMascotasComponent } from './components/lista-mascotas/lista-mascotas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, ListaMascotasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'mi-proyecto';
}