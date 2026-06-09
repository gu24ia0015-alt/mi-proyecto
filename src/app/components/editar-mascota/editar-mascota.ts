import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Mascota } from '../../interfaces/mascota';
import { MascotaService } from '../../services/mascota';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-mascota',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-mascota.html',
  styleUrl: './editar-mascota.css'
})
export class EditarMascotaComponent implements OnInit {

  @Input() mascota!: Mascota;
  @Output() mascotaEditada = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();

  mascotaEditando: Mascota = { id: 0, nombre: '', raza: '', edad: 0 };

  constructor(private mascotaService: MascotaService) {}

  ngOnInit() {
    this.mascotaEditando = { ...this.mascota };
  }

  guardarEdicion() {
    this.mascotaService.editarMascota(this.mascotaEditando.id, this.mascotaEditando).subscribe(() => {
      this.mascotaEditada.emit();
    });
  }

  cancelarEdicion() {
    this.cancelar.emit();
  }

}
