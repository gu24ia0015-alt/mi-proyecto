import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Mascota } from '../../interfaces/mascota';
import { MascotaService } from '../../services/mascota';
import { FormularioMascotaComponent } from '../formulario-mascota/formulario-mascota';
import { EditarMascotaComponent } from '../editar-mascota/editar-mascota';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-mascotas',
  standalone: true,
  imports: [FormularioMascotaComponent, EditarMascotaComponent, CommonModule],
  templateUrl: './lista-mascotas.html',
  styleUrl: './lista-mascotas.css'
})
export class ListaMascotasComponent implements OnInit {

  mascotas: Mascota[] = [];
  mostrarFormulario: boolean = false;
  mascotaSeleccionada: Mascota | null = null;

  constructor(
    private mascotaService: MascotaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = [...data];
      this.cdr.detectChanges();
    });
  }

  eliminarMascota(id: number) {
    this.mascotaService.eliminarMascota(id).subscribe(() => {
      this.cargarMascotas();
    });
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.mascotaSeleccionada = null;
  }

  mascotaAgregada() {
    this.cargarMascotas();
    this.mostrarFormulario = false;
  }

  editarMascota(mascota: Mascota) {
    this.mascotaSeleccionada = mascota;
    this.mostrarFormulario = false;
  }

  mascotaEditada() {
    this.cargarMascotas();
    this.mascotaSeleccionada = null;
  }

  cancelarEdicion() {
    this.mascotaSeleccionada = null;
  }

}