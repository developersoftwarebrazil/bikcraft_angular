import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/page-title/page-title.component';
import { FooterComponent } from './../../components/shared/footer/footer.component';
import { ButtonComponent } from '../../components/shared/button/button.component';


interface Bicicletas {
  iconeUrl: string,
  descricao: string,

}
@Component({
  selector: 'bicicletas',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    ButtonComponent,
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
  @Input() buttonRoute1: string = '/bicicletas/nimbus';
  @Input() buttonRoute2: string = '/bicicletas/magic';
  @Input() buttonRoute3: string = '/bicicletas/nebula';


  bicicletas1: Bicicletas[] = [
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
  bicicletas2: Bicicletas[] = [
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
  bicicletas3: Bicicletas[] = [
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
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Bicicletas');
    this.metaService.addTags([
      { name: 'description', content: 'Página de bicicletas feitas artezanalmente.' },
      { name: 'keywords', content: 'Bicicletas' },
      { property: 'og:title', content: 'Bicicletas' },
      { property: 'og:desscription', content: 'Página de bicicletas feitas artezanalmente.' },
      { property: 'og:type', content: 'website' },
    ])
  }

}
