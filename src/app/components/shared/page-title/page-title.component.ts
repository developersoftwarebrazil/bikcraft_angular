import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {
  @Input() pageTitle: string = '';
  @Input() pageSubtitle: string = '';

  @Input() titleClass: string = 'font-2-l-b cor-5'; // Classes CSS para <p>
  @Input() subtitleClass: string = 'font-1-xxl cor-0'; // Classes CSS para <h3>

  @Input() containerClass: string = 'titulo container'; // Classes CSS para o <div>
  @Input() bgClass: string = 'titulo-bg'; // Classes CSS para o <div>

}
