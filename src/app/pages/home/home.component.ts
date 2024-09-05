import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { HomeBicicletasListaComponent } from './home-bicicletas-lista/home-bicicletas-lista.component';
import { HomeDepoimentosComponent } from './home-depoimentos/depoimentos.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeTecnologiasComponent } from './home-tecnologias/home-tecnologias.component';
import { HomeParceirosComponent } from './home-parceiros/home-parceiros.component';
import { SegurosComponent } from './seguros/seguros.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    HeadersComponent,
    HomeMainComponent,
    HomeBicicletasListaComponent,
    HomeTecnologiasComponent,
    HomeParceirosComponent,
    HomeDepoimentosComponent,
    SegurosComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Bicicletas - Bikcraft');
    this.metaService.addTags([
      { name: 'description', content: 'Descubra nossas bicicletas artesanais de alta qualidade.' },
      { name: 'keywords', content: 'bicicletas, artesanais, alta qualidade' },
      { property: 'og:title', content: 'Bicicletas - Bikcraft' },
      { property: 'og:description', content: 'Descubra nossas bicicletas artesanais de alta qualidade.' },
      { property: 'og:type', content: 'website' },
    ]);
  }
}
