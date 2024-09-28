import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BicicletasListaComponent } from '../../../components/shared/page-component/bicicletas-lista/bicicletas-lista.component';


@Component({
  selector: 'home-bicicletas-lista',
  standalone: true,
  imports: [
    CommonModule,
    BicicletasListaComponent,
  ],
  templateUrl: './home-bicicletas-lista.component.html',

})

export class HomeBicicletasListaComponent implements OnInit {

  bicicletaId!: number;

  bicicletasLista = [
    {
      id: 2,
      link: 'bicicletas',
      bicicletaNome: 'Magic Might',
      bicicletaImagem: 'assets/img/bicicletas/magic-home.jpg',
      bicicletaPreco: 'R$ 2499',
      bicicletaAlt: 'bicicletas preta',
    },
    {
      id: 1,
      link: 'bicicletas',
      bicicletaNome: 'Nimbus Stark',
      bicicletaImagem: 'assets/img/bicicletas/nimbus-home.jpg',
      bicicletaPreco: 'R$ 4999',
      bicicletaAlt: 'bicicletas cinza',
    },
    {
      id: 3,
      link: 'bicicletas',
      bicicletaNome: 'Nebula Cosmic',
      bicicletaImagem: 'assets/img/bicicletas/nebula-home.jpg',
      bicicletaPreco: 'R$ 3999',
      bicicletaAlt: 'bicicletas cinza',
    }
  ]


  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.bicicletaId = +params['id'];
    })

  }


}


