import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'formulario',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  public descricaoAriaLabelSection: string = 'Descrição da Seção';

  @Input() sectionClass: string = 'formulario-contato';

  form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
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
