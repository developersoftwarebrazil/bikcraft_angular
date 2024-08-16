import { Component } from '@angular/core';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { MainComponent } from './main/main.component';
import { BicicletasListaComponent } from './bicicletas-lista/bicicletas-lista.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    HeadersComponent,
    MainComponent,
    BicicletasListaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
