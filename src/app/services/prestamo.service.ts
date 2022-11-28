import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Prestamo } from '../models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  selectedPrestamo!: Prestamo;
  prestamos!: Prestamo[];

  constructor(private http: HttpClient) {
    this.selectedPrestamo = new Prestamo();
  }

  postPrestamo(prestamo: Prestamo) {
    return this.http.post(`${environment.API}/prestamo`, prestamo);
  }

  getPrestamos() {
    return this.http.get<Prestamo[]>(`${environment.API}/prestamo`);
    //return this.http.get(this.URL_API);
  }

  putPrestamo(prestamo: Prestamo) {
    return this.http.put(`${environment.API}/prestamo` + `/${prestamo._id}`, prestamo);
  }

  deletePrestamo(_id: string) {
    return this.http.delete(`${environment.API}/prestamo` + `/${_id}`);
  }
}

