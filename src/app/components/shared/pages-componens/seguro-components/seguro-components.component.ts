import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'seguro-components',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './seguro-components.component.html',
  styleUrl: './seguro-components.component.scss'
})
export class SeguroComponentsComponent {
  @Input() titlePrata!: string;
  @Input() precoPrata!: string;
  @Input() periodoPrata!: string;
  @Input() segurosListaPrata!: { segurosItem: string }[];

  @Input() titleOuro!: string;
  @Input() precoOuro!: string;
  @Input() periodoOuro!: string;
  @Input() segurosListaOuro!: { segurosItem: string }[];
  @Input() showTitle: boolean = true; // Controla a exibição do <h2>
}
