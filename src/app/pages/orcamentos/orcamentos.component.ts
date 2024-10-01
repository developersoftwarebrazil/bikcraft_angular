import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/shared/page-component/footer/footer.component';
import { FormularioComponent } from '../../components/shared/page-component/formulario/formulario.component';
import { HeadersComponent } from '../../components/shared/page-component/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/page-component/page-title/page-title.component';
import { ButtonComponent } from '../../components/shared/component/button/button.component';


@Component({
  selector: 'app-orcamentos',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    FormularioComponent,
    ButtonComponent,
    FooterComponent
  ],
  templateUrl: './orcamentos.component.html',
  styleUrl: './orcamentos.component.scss'
})
export class OrcamentosComponent {

  fieldFomsPersonal = [    // Seção de Dados Pessoais
    { title: 'dados pessoais', divClass: 'font-1-xs cor-9 col-2' },

    { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Digite seu nome', required: true },
    { name: 'sobrenome', label: 'Sobrenome', type: 'text', placeholder: 'Digite seu sobrenome', required: true },
    { name: 'cpf', label: 'CPF', type: 'text', placeholder: '000.000.000-00', required: true, divClass: 'col-2' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Digite seu email', required: true, divClass: 'col-2' },

    // Seção de Entrega
    { title: 'entrega', divClass: 'font-1-xs cor-9 col-2' },

    { name: 'cep', label: 'CEP', type: 'text', placeholder: 'Digite seu CEP', required: true },
    { name: 'numero', label: 'Número', type: 'text', placeholder: 'Digite o número', required: true },
    { name: 'logradouro', label: 'Logradouro', type: 'text', placeholder: 'Digite o logradouro', required: true },
    { name: 'bairro', label: 'Bairro', type: 'text', placeholder: 'Digite o bairro', required: true },
    { name: 'cidade', label: 'Cidade', type: 'text', placeholder: 'Digite a cidade', required: true },
    { name: 'estado', label: 'Estado', type: 'text', placeholder: 'Digite o estado', required: true },

  ];

}
