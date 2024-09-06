import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../components/shared/button/button.component';
import { SeguroComponentsComponent } from '../../../components/shared/seguro-components/seguro-components.component';


interface Seguros {
  segurosItem: string,
}
@Component({
  selector: 'home-seguros',
  standalone: true,
  imports: [
    CommonModule,
    SeguroComponentsComponent,
  ],
  templateUrl: './home-seguros.component.html',

})
 export class HomeSegurosComponent {
//   @Input() titlePrata: string = 'Prata';
//   @Input() periodoPrata: string = 'mensal';
//   @Input() precoPrata: string = 'r$ 199';
//   @Input() titleOuro: string = 'Ouro';
//   @Input() precoOuro: string = 'r$ 299';
//   @Input() periodoOuro: string = 'mensal';

//   segurosListaPrata: Seguros[] = [

//   ];
 // segurosListaOuro: Seguros[] = [
//   ];

}
