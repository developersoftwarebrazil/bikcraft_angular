import { Component } from '@angular/core';
import { HeadersComponent } from '../../../components/shared/headers/headers.component';
import { ButtonComponent } from '../../../components/shared/button/button.component';


@Component({
  selector: 'home-main',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
