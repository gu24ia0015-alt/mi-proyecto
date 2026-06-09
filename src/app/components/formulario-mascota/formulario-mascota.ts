import { Component, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../interfaces/mascota';
import { MascotaService } from '../../services/mascota';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-mascota',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-mascota.html',
  styleUrl: './formulario-mascota.css'
})
export class FormularioMascotaComponent {

  @Output() mascotaGuardada = new EventEmitter<void>();

  nuevaMascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0
  };

  constructor(private mascotaService: MascotaService) {}

  agregarMascota() {
    this.mascotaService.agregarMascota(this.nuevaMascota).subscribe(() => {
      this.mascotaGuardada.emit();
      this.nuevaMascota = { id: 0, nombre: '', raza: '', edad: 0 };
    });
  }

}