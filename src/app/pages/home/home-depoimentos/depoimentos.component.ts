import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-depoimentos',
  standalone: true,
  imports: [],
  templateUrl: './home-depoimentos.component.html',
  styleUrl: './home-depoimentos.component.scss'
})
export class HomeDepoimentosComponent implements OnInit {
  @Input() depoimentoImageUrl: string = "../../../../assets/img/fotos/depoimento.jpg";
  @Input() depoimentoAltText: string = "Pessoas pedalando uma bikcraft.";

  constructor() { }
  ngOnInit(): void { }

}
