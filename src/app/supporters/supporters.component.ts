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
    { name: 'Imobiliária Mouzinho', type: 'empresa', since: '1999' },
    { name: 'SL Engenharia', type: 'empresa', since: '2024' },
   
  ];

  get filtered() {
    if (this.filter === 'all') return this.supporters;
    return this.supporters.filter(s => s.type === this.filter);
  }

  setFilter(f: 'all' | 'pessoa' | 'empresa') {
    this.filter = f;
  }
}
