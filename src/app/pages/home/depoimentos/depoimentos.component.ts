import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'depoimentos',
  standalone: true,
  imports: [],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent implements OnInit {
  @Input() depoimentoImageUrl: string="../../../../assets/img/fotos/depoimento.jpg";
  @Input() depoimentoAltText: string="Pessoas pedalando uma bikcraft.";

  constructor(){}
  ngOnInit(): void { }

}
