import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/page-title/page-title.component';
import { SeguroComponentsComponent } from '../../components/shared/seguro-components/seguro-components.component';

interface VantagensLista{
  vantagemIconeUrl: string,
  vantagensTitulo:string,
  vantagensDescricao: string,
}
@Component({
  selector: 'seguros',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    SeguroComponentsComponent,
    FooterComponent
  ],
  templateUrl: './seguros.component.html',
  styleUrl: './seguros.component.scss'
})
export class SegurosComponent {
  @Input() vantagemLista: VantagensLista[] = [
    {
      vantagemIconeUrl: 'assets/img/icones/eletrica.svg',
      vantagensTitulo:'Reparo Elétrico',
      vantagensDescricao: 'Reparo Elétrico'
    },
  ];

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
