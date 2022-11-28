export class Editorial {

    _id: string;
    nombre: string;
    fechaFundacion: string;
    sedeCentral: string;

    constructor(_id = "", nombre = "", fechaFundacion = '', sedeCentral = "") {
        this._id = _id;
        this.nombre = nombre;
        this.fechaFundacion = fechaFundacion;
        this.sedeCentral = sedeCentral;
    }


}
