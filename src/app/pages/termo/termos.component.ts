import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { HeadersComponent } from '../../components/shared/pages-componens/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/pages-componens/page-title/page-title.component';

@Component({
  selector: 'app-termos',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    FooterComponent,
  ],
  templateUrl: './termos.component.html',
  styleUrl: './termos.component.scss'
})
export class TermosComponent implements OnInit {
  @Input() divTermoClass: string = "termos font-2-s cor-10  container";
  @Input() termoH2Class: string = "font-1-l cor-11";

  constructor(private titleService: Title, private metaService: Meta) { }
  ngOnInit(): void {
    this.titleService.setTitle('Bicicletas - Termos e Condições')
    this.metaService.addTags([
      { name: 'description', content: 'Leia e saiba sobre as nossos termos e condições.' },
      { name: 'keywords', content: 'termos, condições' },
      { property: 'og:title', content: 'Bicicletas - Termos e Condições' },
      { property: 'og:description', content: 'Leia e saiba sobre as nossos termos e condições.' },
      { property: 'og:type', content: 'website' },

    ])
  }

}
