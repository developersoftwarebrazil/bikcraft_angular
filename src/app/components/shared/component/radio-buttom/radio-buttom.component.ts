import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'radio-buttom-component',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './radio-buttom.component.html',
  styleUrl: './radio-buttom.component.scss'
})
export class RadioButtomComponent {
  @Input() options: { id: string, value: string, label: string, hasSpan?: boolean, spanText?: string }[] = [];
  
  @Input() selectedValue!: string;
  @Input() name: string = '';
  @Input() spanText!: string;

  @Output() selectedValueChange = new EventEmitter<string>();

  onSelectedValueChange(value: string) {
    this.selectedValue = value;

    return this.selectedValueChange.emit(this.selectedValue);

  }
}
