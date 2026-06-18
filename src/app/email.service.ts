import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface EmailData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  private serviceId = 'YOUR_SERVICE_ID';
  private templateId = 'YOUR_TEMPLATE_ID';
  private publicKey = 'YOUR_PUBLIC_KEY';

  async send(data: EmailData): Promise<boolean> {
    try {
      await emailjs.send(this.serviceId, this.templateId, data, this.publicKey);
      return true;
    } catch {
      return false;
    }
  }
}
