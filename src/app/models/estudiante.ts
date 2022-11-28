export class Estudiante {

  _id: string;
  tipoIdentificacion: string;
  nroIdentificacion: number;
  nombre: string;
  celular: number;

  constructor(_id = "", tipoIdentificacion = "", nroIdentificacion = 0, nombre = "", celular = 0) {
    this._id = _id;
    this.tipoIdentificacion = tipoIdentificacion;
    this.nroIdentificacion = nroIdentificacion;
    this.nombre = nombre;
    this.celular = celular;

  }


}
