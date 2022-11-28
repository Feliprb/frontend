import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Autor } from '../models/autor';


@Injectable({
  providedIn: 'root'
})
export class AutorService {

  selectedAutor!: Autor;
  autores!: Autor[];

  constructor(private http: HttpClient) {
    this.selectedAutor = new Autor();
  }

  postAutor(autor: Autor) {
    return this.http.post(`${environment.API}/autor`, autor);
  }

  getAutores() {
    return this.http.get<Autor[]>(`${environment.API}/autor`);
    //return this.http.get(this.URL_API);
  }

  putAutor(autor: Autor) {
    return this.http.put(`${environment.API}/autor` + `/${autor._id}`, autor);
  }

  deleteAutor(_id: string) {
    return this.http.delete(`${environment.API}/autor` + `/${_id}`);
  }
}
