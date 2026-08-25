import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  sending = false;
  sent = false;
  error = false;

  form = {
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  };

  sendEmail() {
    if (this.sending) return;
    this.sending = true;
    this.sent = false;
    this.error = false;

    const formEl = this.contactForm.nativeElement;

    emailjs
      .sendForm(
        'service_a2etvgi',
        'template_2ppjn0a',
        formEl,
        { publicKey: '5hCqPusZna0ARKthq' }
      )
      .then(
        () => {
          this.sending = false;
          this.sent = true;
          this.form = { user_name: '', user_email: '', subject: '', message: '' };
        },
        () => {
          this.sending = false;
          this.error = true;
        }
      );
  }
}
