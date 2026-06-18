import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  expandedIndex: number | null = null;

  images = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    label: `Missão ${i + 1}`,
    color: `hsl(${i * 60}, 30%, 40%)`,
  }));

  toggleExpanded(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
