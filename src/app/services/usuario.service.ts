import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedUsuario!: Usuario;
  usuarios!: Usuario[];

  token!: string;

  constructor(private http: HttpClient, private router: Router) {
    this.selectedUsuario = new Usuario();
  }

  postUsuario(usuario: Usuario) {
    return this.http.post(`${environment.API}/usuario`, usuario);
  }

  getUsuarios() {
    return this.http.get<Usuario[]>(`${environment.API}/usuario`);
    //return this.http.get(this.URL_API);
  }

  putUsuario(usuario: Usuario) {
    return this.http.put(`${environment.API}/usuario` + `/${usuario._id}`, usuario);
  }

  deleteUsuario(_id: string) {
    return this.http.delete(`${environment.API}/usuario` + `/${_id}`);
  }
}
