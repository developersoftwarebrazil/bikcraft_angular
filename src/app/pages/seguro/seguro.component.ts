import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { SegurosComponent } from './seguros/seguros.component';
import { FooterComponent } from '../../components/shared/page-component/footer/footer.component';
import { HeadersComponent } from '../../components/shared/page-component/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/page-component/page-title/page-title.component';

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
