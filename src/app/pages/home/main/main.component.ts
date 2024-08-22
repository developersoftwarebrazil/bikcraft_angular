import { Component, Input } from '@angular/core';
import { HeadersComponent } from '../../../components/shared/headers/headers.component';
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
  @Input() title: string=' Bicicletas sob medida';
  @Input() description: string='Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para o cliente. Explore o mundo na sua velocidade com a Bikcraft.';
  @Input() buttonRoute: string='/bicicletas';
  @Input() imageUrl: string='../../../assets/img/fotos/introducao.jpg';
  @Input() imageAlt: string="Bicicleta elétrica preta.";
}
