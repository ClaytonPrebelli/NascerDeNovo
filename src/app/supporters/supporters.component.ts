import { Component } from '@angular/core';

interface Supporter {
  name: string;
  type: 'pessoa' | 'empresa';
  logo?: string;
  since: string;
}

@Component({
  selector: 'app-supporters',
  standalone: true,
  imports: [],
  templateUrl: './supporters.component.html',
  styleUrl: './supporters.component.scss',
})
export class SupportersComponent {
  filter: 'all' | 'pessoa' | 'empresa' = 'all';

  supporters: Supporter[] = [
    { name: 'Igreja Batista da Paz', type: 'empresa', since: '2020' },
    { name: 'Maria Aparecida Silva', type: 'pessoa', since: '2018' },
    { name: 'Ministério Avivamento', type: 'empresa', since: '2021' },
    { name: 'João Batista Santos', type: 'pessoa', since: '2019' },
    { name: 'Igreja Cristã de São Paulo', type: 'empresa', since: '2015' },
    { name: 'Ana Lúcia Pereira', type: 'pessoa', since: '2022' },
    { name: 'Empresa Exemplo Ltda', type: 'empresa', since: '2023' },
    { name: 'Carlos Eduardo Oliveira', type: 'pessoa', since: '2020' },
    { name: 'Igreja do Nazareno', type: 'empresa', since: '2017' },
    { name: 'Rosa Maria Fernandes', type: 'pessoa', since: '2021' },
    { name: 'Congregação Cristã', type: 'empresa', since: '2019' },
    { name: 'Pedro Henrique Costa', type: 'pessoa', since: '2023' },
  ];

  get filtered() {
    if (this.filter === 'all') return this.supporters;
    return this.supporters.filter(s => s.type === this.filter);
  }

  setFilter(f: 'all' | 'pessoa' | 'empresa') {
    this.filter = f;
  }
}
