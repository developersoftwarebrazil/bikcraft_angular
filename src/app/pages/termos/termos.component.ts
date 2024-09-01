import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';

@Component({
  selector: 'app-termos',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    FooterComponent,
  ],
  templateUrl: './termos.component.html',
  styleUrl: './termos.component.scss'
})
export class TermosComponent {

}
