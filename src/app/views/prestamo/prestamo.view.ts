import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estudiante } from 'src/app/models/estudiante';
import { Libro } from 'src/app/models/libro';
import { Prestamo } from 'src/app/models/prestamo';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LibroService } from 'src/app/services/libro.service';
import { PrestamoService } from 'src/app/services/prestamo.service';


@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.view.html',
  styleUrls: ['./prestamo.view.scss'],
  providers: [PrestamoService]

})
export class PrestamoView implements OnInit {


  public listLibros: Libro[] = [];
  public listEstudiantes: Estudiante[] = [];


  constructor(public prestamoService: PrestamoService,
    public libroService: LibroService,
    public estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.getPrestamos();


    this.libroService.getLibros().subscribe(value => {
      if (value) {
        this.listLibros = value;
      }
    });

    this.estudianteService.getEstudiantes().subscribe(value => {
      if (value) {
        this.listEstudiantes = value;
      }
    });

  }

  addPrestamo(form: NgForm) {
    if (form.value._id) {
      this.prestamoService.putPrestamo(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getPrestamos();
      });
    } else {
      this.prestamoService.postPrestamo(form.value).subscribe((res) => {
        this.getPrestamos();
        this.resetForm(form);
      });
    }
  }

  getPrestamos() {
    this.prestamoService.getPrestamos().subscribe((res) => {
      this.prestamoService.prestamos = res;
    });
  }

  editPrestamo(prestamo: Prestamo) {
    this.prestamoService.selectedPrestamo = prestamo;
  }

  deletePrestamo(_id: string, form: NgForm) {
    if (confirm("Estas seguro de eliminar?")) {
      this.prestamoService.deletePrestamo(_id).subscribe((res) => {
        this.getPrestamos();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.prestamoService.selectedPrestamo = new Prestamo();
    }
  }
}
