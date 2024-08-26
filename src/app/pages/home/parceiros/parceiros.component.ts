import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface Marcas{
  parceirosListaImagemUrl: string;
  parceirosListaAltText: string;
}

@Component({
  selector: 'parceiros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.scss'
})
export class ParceirosComponent implements OnInit {

  @Input() parceirosTitle:string='nossos parceiros';
  marcas: Marcas[]=[
    {
      parceirosListaImagemUrl:"assets/img/parceiros/caravan.svg",
      parceirosListaAltText:"caravan",
    },
    {
      parceirosListaImagemUrl:"assets/img/parceiros/ranek.svg",
      parceirosListaAltText:"ranek",
    },
    {
      parceirosListaImagemUrl:"../../../../assets/img/parceiros/handel.svg",
      parceirosListaAltText:"handel",
    },
    {
      parceirosListaImagemUrl:"../../../../assets/img/parceiros/dogs.svg",
      parceirosListaAltText:"dogs",
    },
    {
      parceirosListaImagemUrl:"../../../../assets/img/parceiros/lescone.svg",
      parceirosListaAltText:"lescone",
    },
    {
      parceirosListaImagemUrl:"../../../../assets/img/parceiros/flexblog.svg",
      parceirosListaAltText:"flexblog",
    },
    {
      parceirosListaImagemUrl:"../../../../assets/img/parceiros/wildbeast.svg",
      parceirosListaAltText:"wildebeast",
    },
    {
      parceirosListaImagemUrl:"../../../../assets/img/parceiros/surfbot.svg",
      parceirosListaAltText:"surfbot",
    }
  ];

  constructor() { }
  ngOnInit(): void { }
}
