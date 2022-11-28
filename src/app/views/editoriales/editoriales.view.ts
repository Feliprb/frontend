import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Editorial } from 'src/app/models/editorial';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.view.html',
  styleUrls: ['./editoriales.view.scss'],
  providers: [EditorialService]

})
export class EditorialesView implements OnInit {

  constructor(public editorialService: EditorialService) { }

  ngOnInit(): void {
    this.getEditoriales();
  }

  addEditorial(form: NgForm) {
    if (form.value._id) {
      this.editorialService.putEditorial(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEditoriales();
      });
    } else {
      this.editorialService.postEditorial(form.value).subscribe((res) => {
        this.getEditoriales();
        this.resetForm(form);
      });
    }
  }

  getEditoriales() {
    this.editorialService.getEditoriales().subscribe((res) => {
      this.editorialService.editoriales = res;
    });
  }

  editEditorial(editorial: Editorial) {
    this.editorialService.selectedEditorial = editorial;
  }

  deleteEditorial(_id: string, form: NgForm) {
    if (confirm("Estas seguro de eliminar?")) {
      this.editorialService.deleteEditorial(_id).subscribe((res) => {
        this.getEditoriales();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.editorialService.selectedEditorial = new Editorial();
    }
  }

}
