import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bicicletas-lista',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
  <article class="bicicletas-lista">
  <h2 class="container font-1-xxl">{{ title }}<span class="cor-p1">.</span></h2>
      <ul>
        <li *ngFor="let bicicleta of bicicletas">
          <a (click)="goToBicicleta(bicicleta.link)">
            <img [src]="bicicleta.bicicletaImagem" [alt]="'bicicleta ' + bicicleta.bicicletaNome">
            <h3 class="font-1-xl">{{ bicicleta.bicicletaNome }}</h3>
            <span class="font-2-m cor-8">{{ bicicleta.bicicletaPreco }}</span>
          </a>
        </li>
      </ul>
  </article>
  `,
  styleUrl: './bicicletas-lista.component.scss'
})
export class BicicletasListaComponent {

  @Input() title!: string;
  @Input() bicicletas!: { bicicletaNome: string, bicicletaImagem: string, bicicletaPreco: string, link:string, }[];

  constructor(private router: Router) { }

  goToBicicleta(link: any) {
    this.router.navigate([link])
  }

}
