import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'formulario-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  selectedOption!: string;

  radioOptions = [
    { id: 'bikcraft', value: 'bikcraft', label: 'Bikcraft' },
    { id: 'seguros', value: 'seguros', label: 'Seguros' },

  ];


  public descricaoAriaLabelSection: string = 'Secção de formulário';
  @Input() sectionClass: string = 'form-fields';

  @Input() divClass!: string;
  @Input() formFields: any[] = []; // Array de campos dinâmicos
  @Output() formSubmit = new EventEmitter();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({});

    this.formFields.forEach(field => {
      // Adiciona cada campo ao FormGroup com ou sem validações
      if (!field.tittle || field.buttomTitle) {
        const validators = field.required ? [Validators.required] : [];
        this.form.addControl(field.name, this.formBuilder.control('', validators));
      }

    })
  }



  onSubmit() {
    if (this.form.valid)
      this.formSubmit.emit(this.form.value)
  }

  onRadioSelectionChange(value: string) {
    this.selectedOption = value;
    console.log('Selected value: ', this.selectedOption);
  }
}


// @Input() sectionClass!: string;
// @Input() descricaoAriaLabelSection!: string;

// createForm() {
//   const formGroup: any = {};
//   this.formFields.forEach((field) => {
//     formGroup[field.name] = ['', this.getValidators(field)];
//     formGroup[field.surname] = ['', this.getValidators(field)];
//     formGroup[field.email] = ['', this.getValidators(field)];
//     formGroup[field.phone] = ['', this.getValidators(field)];
//   });
//   return this.form = this.formBuilder.group(formGroup);
// }
// getValidators(field: any) {
//   const validators = [];

//   if (field.required)
//     validators.push(Validators.required);
//   if (field.type === 'name')
//     validators.push(Validators.name);
//   if (field.type === 'email')
//     validators.push(Validators.email);
//   return validators;
// }
