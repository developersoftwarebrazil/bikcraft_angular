import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../components/shared/page-title/page-title.component';

@Component({
  selector: 'perguntas',
  standalone: true,
  imports: [
    CommonModule,
    PageTitleComponent,
  ],
  templateUrl: './perguntas.component.html',
  styleUrl: './perguntas.component.scss'
})
export class PerguntasComponent {

}
