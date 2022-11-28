import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  selectedLibro!: Libro;
  libros!: Libro[];

  constructor(private http: HttpClient, private sessionService: SessionService) {

    this.selectedLibro = new Libro();
  }

  postLibro(libro: Libro) {
    return this.http.post(`${environment.API}/libro`, libro);
  }

  getLibros() {
    return this.http.get<Libro[]>(`${environment.API}/libro`);

    //return this.http.get(this.URL_API);
  }

  putLibro(libro: Libro) {
    return this.http.put(`${environment.API}/libro` + `/${libro._id}`, libro);
  }

  deleteLibro(_id: string) {
    return this.http.delete(`${environment.API}/libro` + `/${_id}`);
  }
}