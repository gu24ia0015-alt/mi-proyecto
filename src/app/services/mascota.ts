import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../interfaces/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private url = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  getMascotas() {
    return this.http.get<Mascota[]>(`${this.url}/mascotas`);
  }

  agregarMascota(mascota: Mascota) {
    return this.http.post<Mascota>(`${this.url}/mascotas`, mascota);
  }

  eliminarMascota(id: number) {
    return this.http.delete(`${this.url}/mascotas/${id}`);
  }

  editarMascota(id: number, mascota: Mascota) {
    return this.http.put<Mascota>(`${this.url}/mascotas/${id}`, mascota);
  }

}
