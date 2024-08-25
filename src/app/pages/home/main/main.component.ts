import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../components/shared/button/button.component';


@Component({
  selector: 'home-main',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @Input() mainTitle: string = ' Bicicletas sob medida';
  @Input() mainDescription: string = 'Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para o cliente. Explore o mundo na sua velocidade com a Bikcraft.';
  @Input() buttonRoute: string = '/bicicletas';
  @Input() mainImageUrl: string = 'assets/img/fotos/introducao.jpg';
  @Input() mainImageAlt: string = "Bicicleta elétrica preta.";
}
