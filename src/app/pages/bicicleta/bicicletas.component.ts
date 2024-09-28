import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/shared/component/button/button.component';
import { FooterComponent } from '../../components/shared/pages-componens/footer/footer.component';
import { HeadersComponent } from '../../components/shared/pages-componens/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/pages-componens/page-title/page-title.component';
import { BicicletaNebulaComponent } from './bicicleta-nebula/bicicleta-nebula.component';


@Component({
  selector: 'bicicletas',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    ButtonComponent,
    BicicletaNebulaComponent,
    FooterComponent,
  ],
  templateUrl: './bicicletas.component.html',
  styleUrl: './bicicletas.component.scss'
})
export class BicicletasComponent implements OnInit {

  @Input() imgBicicleta1Url: string = 'assets/img/bicicletas/nimbus.jpg';
  @Input() altText1: string = 'bicicleta preta';
  @Input() imgBicicleta2Url: string = 'assets/img/bicicletas/magic.jpg';
  @Input() altText2: string = 'bicicleta cinza';
  @Input() imgBicicleta3Url: string = 'assets/img/bicicletas/nebula.jpg';
  @Input() altText3: string = 'bicicleta preta';

  // Rotas para os botões de navegação
  @Input() buttonRoute1: string = 'bicicletas/bicicleta-nimbus';
  @Input() buttonRoute2: string = 'bicicletas/bicicleta-magic';
  @Input() buttonRoute3: string = 'bicicletas/bicicleta-nebula';

  bicicletas1 = [
    {
      iconeUrl: 'assets/img/icones/eletrica.svg',
      descricao: 'Motor Elétrico'
    },
    {
      iconeUrl: 'assets/img/icones/carbono.svg',
      descricao: 'Fibra de Carbono'
    }, {
      iconeUrl: 'assets/img/icones/velocidade.svg',
      descricao: '50 km/h'
    }, {
      iconeUrl: 'assets/img/icones/rastreador.svg',
      descricao: 'Rastreador'
    },
  ];
  bicicletas2 = [
    {
      iconeUrl: 'assets/img/icones/eletrica.svg',
      descricao: 'Motor Elétrico'
    },
    {
      iconeUrl: 'assets/img/icones/carbono.svg',
      descricao: 'Fibra de Carbono'
    }, {
      iconeUrl: 'assets/img/icones/velocidade.svg',
      descricao: '45 km/h'
    }, {
      iconeUrl: 'assets/img/icones/rastreador.svg',
      descricao: 'Rastreador'
    },
  ];
  bicicletas3 = [
    {
      iconeUrl: 'assets/img/icones/eletrica.svg',
      descricao: 'Motor Elétrico'
    },
    {
      iconeUrl: 'assets/img/icones/carbono.svg',
      descricao: 'Fibra de Carbono'
    }, {
      iconeUrl: 'assets/img/icones/velocidade.svg',
      descricao: '40 km/h'
    }, {
      iconeUrl: 'assets/img/icones/rastreador.svg',
      descricao: 'Rastreador'
    },
  ]

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Bicicletas | Bikcraft');
    this.metaService.addTags([
      { name: 'description', content: 'Página de bicicletas feitas artezanalmente.' },
      { name: 'keywords', content: 'Bicicletas' },
      { property: 'og:title', content: 'Bicicletas' },
      { property: 'og:desscription', content: 'Página de bicicletas feitas artezanalmente.' },
      { property: 'og:type', content: 'website' },
    ])
  }


  // Métodos de navegação programática
  navigateToNimbus() {
    this.router.navigate([this.buttonRoute1]);
  }

  navigateToMagic() {
    this.router.navigate([this.buttonRoute2]);
  }

  navigateToNebula() {
    this.router.navigate([this.buttonRoute3]);
  }


}
