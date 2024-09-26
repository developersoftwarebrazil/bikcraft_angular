import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {


  public descricaoAriaLabelSection: string = 'Descrição da Seção';

  @Input() sectionClass!: string;
  @Input() sobrenomeDivClass!: string;
  @Input() telefoneDivClass!: string;
  @Input() emailDivClass!:string;
  @Input() messageDivClass!: string;
  @Input() nomeDivClass!: string;

  @Input() nome!: string;
  @Input() nomePlaceholder: string = 'seu Nome';

  @Input() sobrenome!: string;
  @Input() sobrenomePlaceholder: string = 'seu SobreNome';

  @Input() telefone!: string;
  @Input() telefonePlaceholder: string = '+55 (19 )99999-9999';

  @Input() email!: string;
  @Input() emailPlaceholder: string = 'seu SobreNome';

  @Input() messagePlaceholder: string = 'O que vocè precisa?';
  @Input() inputClass: string = 'default-class'; // Example

  @Input() form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      message: ['']
    })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('form submited', this.form.value);
    }
    else {
      console.log('Form is invalid');
    }
  }
}
