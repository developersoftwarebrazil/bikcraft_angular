import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContatoComponent } from '../../components/shared/pages-componens/contato/contato.component';
import { FormularioComponent } from '../../components/shared/formulario/formulario.component';
import { HeadersComponent } from '../../components/shared/pages-componens/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/pages-componens/page-title/page-title.component';
import { LojaComponent } from './loja/loja.component';
import { FooterComponent } from '../../components/shared/pages-componens/footer/footer.component';

@Component({
  selector: 'contatos',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    ContatoComponent,
    FormularioComponent,
    LojaComponent,
    FooterComponent,
  ],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss'
})
export class ContatosComponent {
  public descricaoAriaLabelSection: string = 'Descrição da Seção';
  @Input() sectionClass: string = 'contato-dados';

}
