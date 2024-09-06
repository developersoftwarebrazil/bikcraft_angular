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
      vantagensDescricao: 'Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra.'
    },
    {
      vantagemIconeUrl: 'assets/img/icones/rastreador.svg',
      vantagensTitulo:'Recuperação',
      vantagensDescricao: 'Recuperamos Bikcrafts roubadas sem custo adicional para o dono. Se não conseguirmos recuperar, damos uma nova para você.'
    },
    {
      vantagemIconeUrl: 'assets/img/icones/ondas.svg',
      vantagensTitulo:'Reparo de Quadro',
      vantagensDescricao: 'Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar.'
    },
    {
      vantagemIconeUrl: 'assets/img/icones/seguro.svg',
      vantagensTitulo:'Segurança',
      vantagensDescricao: 'O nosso seguro garante que todo reparo seja feito com peças genuínas e de alta qualidade. Confie na Bikcraft.'
    },
    {
      vantagemIconeUrl: 'assets/img/icones/sustentavel.svg',
      vantagensTitulo:'Sustentável',
      vantagensDescricao: 'Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.'
    },
    {
      vantagemIconeUrl: 'assets/img/icones/velocidade.svg',
      vantagensTitulo:'Rapidez',
      vantagensDescricao: 'A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.'
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
