import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Bicicleta {
  bicicletaNome: string;
  bicicletaImagem: string;
  bicicletaPreco: string;
  bicicletaAlt: string;
}
@Component({
  selector: 'home-bicicletas-lista',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home-bicicletas-lista.component.html',
  styleUrl: './home-bicicletas-lista.component.scss'
})

export class HomeBicicletasListaComponent implements OnInit {

  @Input() title: string = "escolha a sua";

  bicicletas: Bicicleta[] = [

    {
      bicicletaNome: 'Magic Might',
      bicicletaImagem: 'assets/img/bicicletas/magic-home.jpg',
      bicicletaPreco: 'R$ 2499',
      bicicletaAlt: 'bicicletas preta',
    },
    {
      bicicletaNome: 'Nimbus Stark',
      bicicletaImagem: 'assets/img/bicicletas/nimbus-home.jpg',
      bicicletaPreco: 'R$ 4999',
      bicicletaAlt: 'bicicletas cinza',
    },
    {
      bicicletaNome: 'Nebula Cosmic',
      bicicletaImagem: 'assets/img/bicicletas/nebula-home.jpg',
      bicicletaPreco: 'R$ 3999',
      bicicletaAlt: 'bicicletas cinza',
    }
  ];


  constructor(private router: Router) { }

  ngOnInit(): void { }


  goToBicicleta(): void {

    this.router.navigate(['/bicicleta'])
  }



}


