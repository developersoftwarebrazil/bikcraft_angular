import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { SegurosComponent } from './seguros/seguros.component';
import { PageTitleComponent } from '../../components/shared/page-title/page-title.component';
import { PerguntasComponent } from './perguntas/perguntas.component';

@Component({
  selector: 'seguro',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    SegurosComponent,
    PerguntasComponent,
    FooterComponent,
  ],
  templateUrl: './seguro.component.html',
  styleUrl: './seguro.component.scss'
})
export class SeguroComponent {

}
