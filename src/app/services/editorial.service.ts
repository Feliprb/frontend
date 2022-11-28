import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Editorial } from '../models/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  selectedEditorial!: Editorial;
  editoriales!: Editorial[];

  constructor(private http: HttpClient) {
    this.selectedEditorial = new Editorial();
  }

  postEditorial(editorial: Editorial) {
    return this.http.post(`${environment.API}/editorial`, editorial);
  }

  getEditoriales() {
    return this.http.get<Editorial[]>(`${environment.API}/editorial`);
    //return this.http.get(this.URL_API);
  }

  putEditorial(editorial: Editorial) {
    return this.http.put(`${environment.API}/editorial` + `/${editorial._id}`, editorial);
  }

  deleteEditorial(_id: string) {
    return this.http.delete(`${environment.API}/editorial` + `/${_id}`);
  }
}
