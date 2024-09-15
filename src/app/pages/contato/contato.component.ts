import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { PageTitleComponent } from '../../components/shared/page-title/page-title.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    FooterComponent,
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

}
