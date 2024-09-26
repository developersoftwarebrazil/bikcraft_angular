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
  @Input() name!: string;
  @Input() options: { id: string, label: string, value: string }[] = [];
  @Input() selectedValue!: string;

  @Output() selectedValueChange: EventEmitter<string> = new EventEmitter<string>();


  onSelectedValuChange(value: string) {
    this.selectedValue = value;
    this.selectedValueChange.emit(this.selectedValue);

  }
}
