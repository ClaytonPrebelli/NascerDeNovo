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

  images = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    src: `assets/acoes/${i + 1}.jpeg`,
    alt: `Missão ${i + 1}`,
  }));

  videoSrc = 'assets/acoes/video.mp4';

  toggleExpanded(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
