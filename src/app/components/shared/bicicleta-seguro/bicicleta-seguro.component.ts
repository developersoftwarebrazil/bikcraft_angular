import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../component/button/button.component';

@Component({
  selector: 'bicicleta-seguro',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './bicicleta-seguro.component.html',
  styleUrl: './bicicleta-seguro.component.scss'
})
export class BicicletaSeguroComponent {
  @Input() imagemSeguroBicicletaUrl: string = 'assets/img/fotos/seguros.jpg';
  @Input() imagemSeguroBicicletaAltText: string = 'Pessoa parada em cima de uma bicicleta.';

  @Input() tituloBicicleta: string = 'Pedale mais tranquilo com o nosso';
  @Input() textoBicicleta: string = 'Inscreva-se em um dos planos do nosso seguro Bikcraft e aproveite diversos benefícios.';

}
