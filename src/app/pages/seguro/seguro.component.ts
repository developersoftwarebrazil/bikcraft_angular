import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/pages-componens/page-title/page-title.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { SegurosComponent } from './seguros/seguros.component';

@Component({
  selector: 'seguro',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    SegurosComponent,
    PerguntasComponent,
    FooterComponent,
  ],
  templateUrl: './seguro.component.html',
  styleUrl: './seguro.component.scss'
})
export class SeguroComponent implements OnInit {


  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Seguros | Bikcraft');
    this.metaService.addTags([
      { name: 'description', content: 'Página de seguros, você seguro.' },
      { name: 'keywords', content: 'Bicicletas | Seguros' },
      { property: 'og:title', content: 'Bicicletas' },
      { property: 'og:desscription', content: 'Página de seguros, você seguro.' },
      { property: 'og:type', content: 'website' },

    ])
  }

}
