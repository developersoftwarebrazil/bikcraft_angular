import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/shared/button/button.component';


interface Seguros {
  segurosItem: string,
}
@Component({
  selector: 'home-seguros',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './home-seguros.component.html',
  styleUrl: './home-seguros.component.scss'
})
export class HomeSegurosComponent implements OnInit {
  @Input() buttonRoute: string = '/orcamentos';
  @Input() titlePrata: string = 'Prata';
  @Input() periodoPrata: string = 'mensal';
  @Input() precoPrata: string = 'r$ 199';
  @Input() titleOuro: string = 'Ouro';
  @Input() precoOuro: string = 'r$ 299';
  @Input() periodoOuro: string = 'mensal';

  segurosListaPrata: Seguros[] = [
    {
      segurosItem: "Duas trocas por ano",
    },
    {
      segurosItem: "Assistência técnica",
    },
    {
      segurosItem: "Suporte das 08h às 18h",
    },
    {
      segurosItem: "Cobertura estadual",
    },
  ];
  segurosListaOuro: Seguros[] = [
    {
      segurosItem: "Cinco trocas por ano",
    },
    {
      segurosItem: "Assistência especial",
    },
    {
      segurosItem: "Suporte 24h",
    },
    {
      segurosItem: "Cobertura nacional",
    },
    {
      segurosItem: "Descontos em parceiros",
    },
    {
      segurosItem: "Acesso ao clube Bikcraft",
    },
  ];

  constructor() { }
  ngOnInit(): void { }


}
