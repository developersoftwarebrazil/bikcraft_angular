import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';

@Component({
  selector: 'seguro',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    FooterComponent,
  ],
  templateUrl: './seguro.component.html',
  styleUrl: './seguro.component.scss'
})
export class SeguroComponent {

}
