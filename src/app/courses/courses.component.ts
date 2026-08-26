import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  @ViewChild('embaixadoresForm') embaixadoresForm!: ElementRef<HTMLFormElement>;
  @ViewChild('academiaForm') academiaForm!: ElementRef<HTMLFormElement>;
  @ViewChild('formacaoForm') formacaoForm!: ElementRef<HTMLFormElement>;

  sendingEmbaixadores = false;
  sentEmbaixadores = false;
  errorEmbaixadores = false;

  sendingAcademia = false;
  sentAcademia = false;
  errorAcademia = false;

  sendingFormacao = false;
  sentFormacao = false;
  errorFormacao = false;

  curriculumOpen = false;

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

  formacao = {
    nome: '',
    email: '',
    whatsapp: '',
    igreja: '',
    cidade: '',
  };

  sendEmbaixadores() {
    if (this.sendingEmbaixadores) return;
    this.sendingEmbaixadores = true;
    this.sentEmbaixadores = false;
    this.errorEmbaixadores = false;

    emailjs
      .send('service_a2etvgi', 'template_2ppjn0a', {
        user_name: this.embaixadores.nome,
        user_email: this.embaixadores.email,
        subject: 'Inscrição — Embaixadores do Reino',
        message: [
          `Nome: ${this.embaixadores.nome}`,
          `Cidade: ${this.embaixadores.cidade}`,
          `WhatsApp: ${this.embaixadores.whatsapp}`,
          `E-mail: ${this.embaixadores.email}`,
          `Igreja: ${this.embaixadores.igreja}`,
          `Função: ${this.embaixadores.funcao}`,
          `Área: ${this.embaixadores.area}`,
        ].join('\n'),
      }, { publicKey: '5hCqPusZna0ARKthq' })
      .then(
        () => {
          this.sendingEmbaixadores = false;
          this.sentEmbaixadores = true;
          this.embaixadores = { nome: '', cidade: '', whatsapp: '', email: '', igreja: '', funcao: '', area: '' };
        },
        () => {
          this.sendingEmbaixadores = false;
          this.errorEmbaixadores = true;
        }
      );
  }

  sendAcademia() {
    if (this.sendingAcademia) return;
    this.sendingAcademia = true;
    this.sentAcademia = false;
    this.errorAcademia = false;

    emailjs
      .send('service_a2etvgi', 'template_2ppjn0a', {
        user_name: this.academia.nome,
        user_email: this.academia.email,
        subject: 'Inscrição — Academia Missionária',
        message: [
          `Nome: ${this.academia.nome}`,
          `E-mail: ${this.academia.email}`,
          `WhatsApp: ${this.academia.whatsapp}`,
          `Igreja: ${this.academia.igreja}`,
        ].join('\n'),
      }, { publicKey: '5hCqPusZna0ARKthq' })
      .then(
        () => {
          this.sendingAcademia = false;
          this.sentAcademia = true;
          this.academia = { nome: '', email: '', whatsapp: '', igreja: '' };
        },
        () => {
          this.sendingAcademia = false;
          this.errorAcademia = true;
        }
      );
  }

  sendFormacao() {
    if (this.sendingFormacao) return;
    this.sendingFormacao = true;
    this.sentFormacao = false;
    this.errorFormacao = false;

    emailjs
      .send('service_a2etvgi', 'template_2ppjn0a', {
        user_name: this.formacao.nome,
        user_email: this.formacao.email,
        subject: 'Inscrição — Curso de Formação Missionária',
        message: [
          `Nome: ${this.formacao.nome}`,
          `Cidade: ${this.formacao.cidade}`,
          `WhatsApp: ${this.formacao.whatsapp}`,
          `E-mail: ${this.formacao.email}`,
          `Igreja: ${this.formacao.igreja}`,
        ].join('\n'),
      }, { publicKey: '5hCqPusZna0ARKthq' })
      .then(
        () => {
          this.sendingFormacao = false;
          this.sentFormacao = true;
          this.formacao = { nome: '', email: '', whatsapp: '', igreja: '', cidade: '' };
        },
        () => {
          this.sendingFormacao = false;
          this.errorFormacao = true;
        }
      );
  }
}
