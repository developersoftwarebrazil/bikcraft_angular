import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BicicletaSeguroComponent } from '../../../components/shared/bicicleta-seguro/bicicleta-seguro.component';
import { BicicletasListaComponent } from '../../../components/shared/bicicletas-lista/bicicletas-lista.component';
import { ButtonComponent } from '../../../components/shared/component/button/button.component';

import { FooterComponent } from '../../../components/shared/pages-componens/footer/footer.component';
import { HeadersComponent } from '../../../components/shared/pages-componens/headers/headers.component';
import { PageTitleComponent } from '../../../components/shared/pages-componens/page-title/page-title.component';

@Component({
  selector: 'app-bicicleta-magic',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    ButtonComponent,
    BicicletasListaComponent,
    BicicletaSeguroComponent,
    FooterComponent,
  ],
  templateUrl: './bicicleta-magic.component.html',
  styleUrl: '../bicicleta-nimbus/bicicleta-nimbus.component.scss'
})
export class BicicletaMagicComponent implements OnInit {
  // imagens bicicletas
  @Input() nimbus1: string = "assets/img/bicicleta/nimbus1.jpg";
  @Input() altImgText1: string = "bicicleta preta";
  @Input() nimbus2: string = "assets/img/bicicleta/nimbus2.jpg";
  @Input() altImgText2: string = "bicicleta cinza";
  @Input() nimbus3: string = "assets/img/bicicleta/nimbus3.jpg";
  @Input() altImgText3: string = "bicicleta branca";

  // imagens icones
  @Input() iconUrl1: string = "assets/img/icones/entrega.svg";
  @Input() altImgIcon1: string = "imagem icone moto de entrega";
  @Input() iconUrl2: string = "assets/img/icones/estoque.svg";
  @Input() altImgIcon2: string = "imagem icone moto de estoque";


  // Rotas para os botões de navegação
  @Input() buttonRoute1: string = 'bicicletas/bicicleta-nimbus';
  @Input() buttonRoute2: string = 'bicicletas/bicicleta-magic';
  @Input() buttonRoute3: string = 'bicicletas/bicicleta-nebula';


  bicicletasinformacoes = [
    {
      iconUrl: 'assets/img/icones/eletrica.svg',
      iconTitulo: 'Motor Elétrico',
      descricao: 'Permite você viajar distâncias inimaginaveis com a sua bike.'
    },
    {
      iconUrl: 'assets/img/icones/velocidade.svg',
      iconTitulo: '40 km/h',
      descricao: 'A mais rápida bicicleta elétrica disponível hoje no mercado.'
    },
    {
      iconUrl: 'assets/img/icones/rastreador.svg',
      iconTitulo: 'Rastreador',
      descricao: 'Rastreador e sistema anti-furto para garantir o seu sossego.'
    },
    {
      iconUrl: 'assets/img/icones/carbono.svg',
      iconTitulo: 'Fibra de Carbono',
      descricao: 'Maior proteção possível para a sua Bikcraft com fibra de carbono.'
    },
  ]
  bicicletasficha = [
    {
      etiqueta: 'Peso',
      conteudo: '9 kg',
    },
    {
      etiqueta: 'Altura',
      conteudo: '60 cm',
    },
    {
      etiqueta: 'Largura',
      conteudo: '120 cm',
    },
    {
      etiqueta: 'Profundidade',
      conteudo: '10 cm',
    },
    {
      etiqueta: 'Marchas',
      conteudo: '16',
    },
    {
      etiqueta: 'Rodas Aro',
      conteudo: '29',
    },
  ]

  bicicletasLista = [
    {
      id: 3,
      link: 'bicicletas/bicicleta-nebula',
      bicicletaNome: 'Nebula',
      bicicletaImagem: 'assets/img/bicicletas/nebula.jpg',
      bicicletaPreco: 'R$ 3999',
      bicicletaAlt: 'bicicletas preta',
    },
    {
      id: 1,
      link: 'bicicletas/bicicleta-nimbus',
      bicicletaNome: 'Nimbus Stark',
      bicicletaImagem: 'assets/img/bicicletas/nimbus.jpg',
      bicicletaPreco: 'R$ 4999',
      bicicletaAlt: 'bicicletas preta',
    }
  ]

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }
  ngOnInit(): void {
    this.titleService.setTitle('Bicicletas | Magic-Bikcraft');
    this.metaService.addTags([
      { name: 'description', content: 'A Magic Might é a melhor Bikcraaaft já criada pela nossa equipe' },
      { name: 'keywords', content: 'Bicicletas | Magic-Bikcarft' },
      { property: 'og:title', content: 'Bicicletas' },
      { property: 'og:desscription', content: 'A Magic Might é a melhor Bikcraaaft já criada pela nossa equipe' },
      { property: 'og:type', content: 'website' },

    ])
  }

}
