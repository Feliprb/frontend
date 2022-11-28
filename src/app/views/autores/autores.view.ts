import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.view.html',
  styleUrls: ['./autores.view.scss'],
  providers: [AutorService]

})
export class AutoresView implements OnInit {

  constructor(public autorService: AutorService) { }

  ngOnInit(): void {
    this.getAutores();
  }

  addAutor(form: NgForm) {
    if (form.value._id) {
      this.autorService.putAutor(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getAutores();
      });
    } else {
      this.autorService.postAutor(form.value).subscribe((res) => {
        this.getAutores();
        this.resetForm(form);
      });
    }
  }

  getAutores() {
    this.autorService.getAutores().subscribe((res) => {
      this.autorService.autores = res;
    });
  }

  editAutor(autor: Autor) {
    this.autorService.selectedAutor = autor;
  }

  deleteAutor(_id: string, form: NgForm) {
    if (confirm("Estas seguro de eliminar?")) {
      this.autorService.deleteAutor(_id).subscribe((res) => {
        this.getAutores();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.autorService.selectedAutor = new Autor();
    }
  }

}
