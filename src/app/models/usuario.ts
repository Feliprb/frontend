export class Usuario {

  _id: string;
  name: string;
  email: string;
  password: string;
  rol: string;

  constructor(_id = "", name = "", email = "", password = "", rol = "") {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.rol = rol;

  }


}
