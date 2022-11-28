import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../models/estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  selectedEstudiante!: Estudiante;
  estudiantes!: Estudiante[];

  constructor(private http: HttpClient) {
    this.selectedEstudiante = new Estudiante();
  }

  postEstudiante(estudiante: Estudiante) {
    return this.http.post(`${environment.API}/estudiante`, estudiante);
  }

  getEstudiantes() {
    return this.http.get<Estudiante[]>(`${environment.API}/estudiante`);
    //return this.http.get(this.URL_API);
  }

  putEstudiante(estudiante: Estudiante) {
    return this.http.put(`${environment.API}/estudiante` + `/${estudiante._id}`, estudiante);
  }

  deleteEstudiante(_id: string) {
    return this.http.delete(`${environment.API}/estudiante` + `/${_id}`);
  }
}
