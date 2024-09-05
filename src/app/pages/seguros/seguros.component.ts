import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/page-title/page-title.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'seguros',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    FooterComponent
  ],
  templateUrl: './seguros.component.html',
  styleUrl: './seguros.component.scss'
})
export class SegurosComponent {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Seguros | Bikcraft');
    this.metaService.addTags([
      { name: 'description', content: 'Página de bicicletas feitas artezanalmente.' },
      { name: 'keywords', content: 'Bicicletas' },
      { property: 'og:title', content: 'Bicicletas' },
      { property: 'og:desscription', content: 'Página de bicicletas feitas artezanalmente.' },
      { property: 'og:type', content: 'website' },
    ])
  }

}
