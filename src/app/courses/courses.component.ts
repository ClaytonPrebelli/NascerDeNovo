import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  embaixadores = {
    nome: '',
    cidade: '',
    whatsapp: '',
    email: '',
    igreja: '',
    funcao: '',
    area: '',
  };

  academia = {
    nome: '',
    email: '',
    whatsapp: '',
    igreja: '',
  };

  onSubmitEmbaixadores(event: Event) {
    event.preventDefault();
  }

  onSubmitAcademia(event: Event) {
    event.preventDefault();
  }
}
