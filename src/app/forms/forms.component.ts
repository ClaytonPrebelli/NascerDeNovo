import { Component } from '@angular/core';

export interface FormField {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  required: boolean;
  options?: string[];
}

export interface FormConfig {
  id: string;
  title: string;
  icon: string;
  description: string;
  fields: FormField[];
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  activeForm: string | null = null;

  forms: FormConfig[] = [
    {
      id: 'missionario',
      title: 'Quero ser Missionário',
      icon: '✠',
      description: 'Preencha seus dados e entraremos em contato.',
      fields: [
        { label: 'Nome', placeholder: 'Seu nome completo', type: 'text', required: true },
        { label: 'Telefone', placeholder: '(XX) XXXXX-XXXX', type: 'tel', required: true },
        { label: 'Cidade', placeholder: 'Sua cidade e estado', type: 'text', required: true },
        { label: 'Igreja', placeholder: 'Nome da sua igreja', type: 'text', required: true },
        { label: 'Mensagem', placeholder: 'Conte um pouco sobre seu chamado...', type: 'textarea', required: false },
      ],
    },
    {
      id: 'embaixador',
      title: 'Embaixadores do Reino',
      icon: '⚔️',
      description: 'Uma geração levantada para expandir o Reino de Deus.',
      fields: [
        { label: 'Nome completo', placeholder: 'Seu nome completo', type: 'text', required: true },
        { label: 'Cidade/Estado', placeholder: 'Ex: São Paulo/SP', type: 'text', required: true },
        { label: 'WhatsApp', placeholder: '(XX) XXXXX-XXXX', type: 'tel', required: true },
        { label: 'E-mail', placeholder: 'seu@email.com', type: 'email', required: true },
        { label: 'Igreja/Ministério', placeholder: 'Nome da igreja ou ministério', type: 'text', required: true },
        { label: 'Função ministerial', placeholder: 'Ex: Pastor, Líder, Missionário', type: 'text', required: true },
        { label: 'Área em que deseja servir', placeholder: 'Selecione', type: 'select', required: true, options: ['Evangelismo', 'Missões', 'Implantação de Igrejas', 'Formação Missionária', 'Ações Sociais', 'Apoio às Famílias'] },
      ],
    },
    {
      id: 'academia',
      title: 'Academia Missionária',
      icon: '📚',
      description: 'Formando Professores Missionários. Transformando Gerações.',
      fields: [
        { label: 'Nome completo', placeholder: 'Seu nome completo', type: 'text', required: true },
        { label: 'E-mail', placeholder: 'seu@email.com', type: 'email', required: true },
        { label: 'WhatsApp', placeholder: '(XX) XXXXX-XXXX', type: 'tel', required: true },
        { label: 'Igreja/Ministério', placeholder: 'Nome da igreja ou ministério', type: 'text', required: true },
      ],
    },
    {
      id: 'representante',
      title: 'Quero ser Representante',
      icon: '🤝',
      description: 'Represente o projeto em seu estado.',
      fields: [
        { label: 'Nome', placeholder: 'Seu nome completo', type: 'text', required: true },
        { label: 'Estado', placeholder: 'Seu estado', type: 'text', required: true },
        { label: 'Experiência', placeholder: 'Conte sua experiência missionária...', type: 'textarea', required: true },
        { label: 'Telefone', placeholder: '(XX) XXXXX-XXXX', type: 'tel', required: true },
      ],
    },
    {
      id: 'voluntario',
      title: 'Quero ser Voluntário',
      icon: '❤️',
      description: 'Doe seu tempo e talentos.',
      fields: [
        { label: 'Nome', placeholder: 'Seu nome completo', type: 'text', required: true },
        { label: 'Área de Interesse', placeholder: 'Selecione', type: 'select', required: true, options: ['Ensino e Educação', 'Missões', 'Assistência Social', 'Administrativo', 'Comunicação e Mídias', 'Eventos', 'Captação de Recursos', 'Outro'] },
        { label: 'Telefone', placeholder: '(XX) XXXXX-XXXX', type: 'tel', required: true },
        { label: 'Mensagem', placeholder: 'Conte como deseja ajudar...', type: 'textarea', required: false },
      ],
    },
    {
      id: 'parceiro',
      title: 'Quero ser Parceiro',
      icon: '🏢',
      description: 'Sua empresa ou igreja pode fazer parte.',
      fields: [
        { label: 'Nome', placeholder: 'Seu nome', type: 'text', required: true },
        { label: 'Empresa ou Igreja', placeholder: 'Nome da instituição', type: 'text', required: true },
        { label: 'Contato', placeholder: '(XX) XXXXX-XXXX', type: 'tel', required: true },
        { label: 'Mensagem', placeholder: 'Como deseja contribuir?', type: 'textarea', required: false },
      ],
    },
    {
      id: 'contato',
      title: 'Fale Conosco',
      icon: '✉️',
      description: 'Tire suas dúvidas ou deixe sua mensagem.',
      fields: [
        { label: 'Nome', placeholder: 'Seu nome completo', type: 'text', required: true },
        { label: 'E-mail', placeholder: 'seu@email.com', type: 'email', required: true },
        { label: 'Assunto', placeholder: 'Assunto da mensagem', type: 'text', required: false },
        { label: 'Mensagem', placeholder: 'Sua mensagem...', type: 'textarea', required: true },
      ],
    },
  ];

  toggleForm(id: string) {
    this.activeForm = this.activeForm === id ? null : id;
  }
}
