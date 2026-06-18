import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { MvvComponent } from './mvv/mvv.component';
import { AreasComponent } from './areas/areas.component';
import { NumbersComponent } from './numbers/numbers.component';
import { CoursesComponent } from './courses/courses.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SupportersComponent } from './supporters/supporters.component';
import { FormsComponent } from './forms/forms.component';
import { DonationComponent } from './donation/donation.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, HeroComponent, AboutComponent, MvvComponent,
    AreasComponent, NumbersComponent, CoursesComponent, LeadershipComponent,
    TestimonialsComponent, GalleryComponent, SupportersComponent, FormsComponent, DonationComponent,
    ContactComponent, FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
