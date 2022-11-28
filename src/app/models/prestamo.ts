
export class Prestamo {

    _id: string;
    nomLibro: string;
    nomEstudiante: string;
    fechaPrestamo: string;
    fechaDevolucion: string;
    cantidad: number;
    observacion: string;

    constructor(_id = "", nomLibro = "", nomEstudiante = "", fechaPrestamo = '', fechaDevolucion = '', cantidad = 0, observacion = "") {
        this._id = _id;
        this.nomLibro = nomLibro;
        this.nomEstudiante = nomEstudiante;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.cantidad = cantidad;
        this.observacion = observacion;
    }

}
