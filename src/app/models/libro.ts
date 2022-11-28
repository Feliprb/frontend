export class Libro {

  _id: string;
  nombre: string;
  autor: string;
  editorial: string;
  descripcion: string;

  constructor(_id = "", nombre = "", autor = "", editorial = "", descripcion = "") {
    this._id = _id;
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.descripcion = descripcion;

  }


}
