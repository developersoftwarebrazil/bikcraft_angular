import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bicicletas-lista',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
  <article class="bicicletas-lista">
  <h2 class="container font-1-xxl">{{ title }}<span class="cor-p1">.</span></h2>
      <ul>
        <li *ngFor="let bicicleta of bicicletas">
          <a (click)="goToBicicleta(bicicleta)">
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
  @Input() bicicletas!: { bicicletaNome: string, bicicletaImagem: string, bicicletaPreco: string }[];

  goToBicicleta(bicicleta: any) {
    console.log('Bicicleta selecionada:', bicicleta);
    // Lógica de navegação ou ação quando clicar em uma bicicleta
  }

}
