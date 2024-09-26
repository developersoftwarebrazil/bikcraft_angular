import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

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
  @Input() name!:string;
  @Input() options:{label: string, value: string}[]=[];
  @Input() selectedValue!:string;
  @Output() selectedValueChanged: EventEmitter = new EventEmitter();


  onSelectedValuChange(value: string){
    this.selectedValue = value;
    this.selectedValueChanged.emit(this.selectedValue);
  }
}
