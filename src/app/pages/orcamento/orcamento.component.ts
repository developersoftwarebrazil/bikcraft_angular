import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../components/shared/component/button/button.component';
import { RadioButtomComponent } from '../../components/shared/component/radio-buttom/radio-buttom.component';
import { FooterComponent } from '../../components/shared/page-component/footer/footer.component';
import { FormularioComponent } from '../../components/shared/page-component/formulario/formulario.component';
import { HeadersComponent } from '../../components/shared/page-component/headers/headers.component';
import { PageTitleComponent } from '../../components/shared/page-component/page-title/page-title.component';

@Component({
  selector: 'app-orcamento',
  standalone: true,
  imports: [
    CommonModule,
    HeadersComponent,
    PageTitleComponent,
    ButtonComponent,
    RadioButtomComponent,
    FormularioComponent,
    FooterComponent
  ],
  templateUrl: './orcamento.component.html',
  styleUrl: './orcamento.component.scss'
})
export class OrcamentoComponent {
  @Input() divClass!: string;
  @Input() idRadio!: string;

  selectedValue!: string; // Defina um valor padrão, se necessário
  selectedOption!: string;


  radioOptionsOrcamento = [
    { id: 'bikcraft', value: 'bicraft', label: 'Bikcraft', hasSpan: false, spaText: '' },
    { id: 'seguros', value: 'seguros', label: 'Seguros', hasSpan: false, spaText: '' },
  ];

  radioOptionsBike = [
    { id: 'nimbus', value: 'nimbus', label: 'Nimbus Stark', hasSpan: true, spanText: 'R$ 4999' },
    { id: 'magic', value: 'magic', label: 'Magic Might', hasSpan: true, spanText: 'R$ 2499' },
    { id: 'nebula', value: 'nebula', label: 'Nebula Cosmic', hasSpan: true, spanText: 'R$ 3999' },

  ];
  radioOpitionsSeguro=[
    {id: 'prata', value: 'prata', label: 'Prata', hasSpan: true, spanText: 'R$ 199'},
    {id: 'ouro', value: 'ouro', label: 'Ouro', hasSpan: true, spanText: 'RS 299'},
  ]

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

  onSubmit(data: any) {
    console.log('Formulário enviado com sucesso:', data);
  }
  onRadioSelectionChange(value: string) {
    this.selectedOption = value;
    console.log('Selected value: ', this.selectedOption);

  }

}
