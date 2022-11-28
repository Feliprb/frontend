import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Autor } from 'src/app/models/autor';
import { Editorial } from 'src/app/models/editorial';
import { Libro } from 'src/app/models/libro';
import { AutorService } from 'src/app/services/autor.service';
import { EditorialService } from 'src/app/services/editorial.service';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.view.html',
  styleUrls: ['./libros.view.scss'],
  providers: [LibroService]

})
export class LibrosView implements OnInit {

  public listEditoriales: Editorial[] = [];
  public listAutores: Autor[] = [];

  constructor(public libroService: LibroService,
    public editorialService: EditorialService,
    public autorService: AutorService,

  ) { }

  ngOnInit(): void {
    this.getLibros();

    this.editorialService.getEditoriales().subscribe(value => {
      if (value) {
        this.listEditoriales = value;
      }
    });

    this.autorService.getAutores().subscribe(value => {
      if (value) {
        this.listAutores = value;
      }
    });
  }

  addLibro(form: NgForm) {
    if (form.value._id) {
      console.log('formli', form.value);
      this.libroService.putLibro(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getLibros();
      });
    } else {
      this.libroService.postLibro(form.value).subscribe((res) => {
        this.getLibros();
        this.resetForm(form);
      });
    }
  }

  getLibros() {
    this.libroService.getLibros().subscribe((res) => {
      this.libroService.libros = res;
    });
  }

  editLibro(libro: Libro) {
    this.libroService.selectedLibro = libro;
  }

  deleteLibro(_id: string, form: NgForm) {
    if (confirm("Estas seguro de eliminar?")) {
      this.libroService.deleteLibro(_id).subscribe((res) => {
        this.getLibros();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.libroService.selectedLibro = new Libro();
    }
  }

}
