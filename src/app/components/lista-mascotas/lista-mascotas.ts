import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../interfaces/mascota';
import { MascotaService } from '../../services/mascota';
import { FormularioMascotaComponent } from '../formulario-mascota/formulario-mascota';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-mascotas',
  standalone: true,
  imports: [FormularioMascotaComponent, CommonModule],
  templateUrl: './lista-mascotas.html',
  styleUrl: './lista-mascotas.css'
})
export class ListaMascotasComponent implements OnInit {

  mascotas: Mascota[] = [];
  mostrarFormulario: boolean = false;

  constructor(private mascotaService: MascotaService) {}

  ngOnInit() {
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }

  eliminarMascota(id: number) {
    this.mascotaService.eliminarMascota(id).subscribe(() => {
      this.cargarMascotas();
    });
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  mascotaAgregada() {
    this.cargarMascotas();
    this.mostrarFormulario = false;
  }

}