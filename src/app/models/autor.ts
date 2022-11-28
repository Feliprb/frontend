export class Autor {

    _id: string;
    nombre: string;
    fechaNacimiento: string;
    nacionalidad: string;

    constructor(_id = "", nombre = "", fechaNacimiento = '', nacionalidad = "") {
        this._id = _id;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
    }


}
