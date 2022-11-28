import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.view.html',
  styleUrls: ['./usuarios.view.scss'],
  providers: [UsuarioService]

})
export class UsuariosView implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  addUsuario(form: NgForm) {
    if (form.value._id) {
      this.usuarioService.putUsuario(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getUsuarios();
      });
    } else {
      this.usuarioService.postUsuario(form.value).subscribe((res) => {
        this.getUsuarios();
        this.resetForm(form);
      });
    }
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe((res) => {
      this.usuarioService.usuarios = res;
    });
  }

  editUsuario(usuario: Usuario) {
    this.usuarioService.selectedUsuario = usuario;
  }

  deleteUsuario(_id: string, form: NgForm) {
    if (confirm("Estas seguro de eliminar?")) {
      this.usuarioService.deleteUsuario(_id).subscribe((res) => {
        this.getUsuarios();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
    }
  }


}
