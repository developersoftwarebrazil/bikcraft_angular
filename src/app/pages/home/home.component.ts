import { Component } from '@angular/core';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { BicicletasListaComponent } from './bicicletas-lista/bicicletas-lista.component';
import { MainComponent } from './main/main.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { SegurosComponent } from './seguros/seguros.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    HeadersComponent,
    MainComponent,
    BicicletasListaComponent,
    TecnologiasComponent,
    ParceirosComponent,
    DepoimentosComponent,
    SegurosComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
