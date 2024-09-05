import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

interface Styles {
  class: string;
  cor: string;
  font: string;

}
@Component({
  selector: 'headers',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
  ],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss',
})
export class HeadersComponent implements OnInit {

  headerLinks = [
    { label: "Bicicletas", url: "/bicicleta" },
    { label: "Seguros", url: "/seguros" },
    { label: "Contatos", url: "/contato" },
  ]

  @Input() marcaImgUrl: string = "assets/bikcraft.svg";
  @Input() marcarAtlText: string = "marca svg";


  constructor() { }
  ngOnInit(): void { }

}
