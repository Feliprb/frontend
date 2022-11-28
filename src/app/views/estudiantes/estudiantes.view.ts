import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.view.html',
  styleUrls: ['./estudiantes.view.scss'],
  providers: [EstudianteService]

})
export class EstudiantesView implements OnInit {

  constructor(public estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  addEstudiante(form: NgForm) {
    if (form.value._id) {
      this.estudianteService.putEstudiante(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEstudiantes();
      });
    } else {
      this.estudianteService.postEstudiante(form.value).subscribe((res) => {
        this.getEstudiantes();
        this.resetForm(form);
      });
    }
  }

  getEstudiantes() {
    this.estudianteService.getEstudiantes().subscribe((res) => {
      this.estudianteService.estudiantes = res;
    });
  }

  editEstudiante(estudiante: Estudiante) {
    this.estudianteService.selectedEstudiante = estudiante;
  }

  deleteEstudiante(_id: string, form: NgForm) {
    if (confirm("Estas seguro de eliminar?")) {
      this.estudianteService.deleteEstudiante(_id).subscribe((res) => {
        this.getEstudiantes();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.estudianteService.selectedEstudiante = new Estudiante();
    }
  }

}
