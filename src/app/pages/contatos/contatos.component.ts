import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { FormularioComponent } from '../../components/shared/formulario/formulario.component';
import { HeadersComponent } from '../../components/shared/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/page-title/page-title.component';
import { ContatoComponent } from '../../components/shared/contato/contato.component';

@Component({
  selector: 'contatos',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    ContatoComponent,
    FormularioComponent,
    FooterComponent,
  ],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss'
})
export class ContatosComponent {
  public descricaoAriaLabelSection: string = 'Descrição da Seção';
  @Input() sectionClass: string = 'contato-dados';

}
