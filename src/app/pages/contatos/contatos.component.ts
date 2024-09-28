import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LojaComponent } from './loja/loja.component';
import { FormularioComponent } from '../../components/shared/formulario/formulario.component';
import { ContatoComponent } from '../../components/shared/page-component/contato/contato.component';
import { FooterComponent } from '../../components/shared/page-component/footer/footer.component';
import { HeadersComponent } from '../../components/shared/page-component/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/page-component/page-title/page-title.component';

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
