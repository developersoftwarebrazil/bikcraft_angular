import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bicicletas-lista',
  standalone: true,
  imports: [],
  templateUrl: './bicicletas-lista.component.html',
  styleUrl: './bicicletas-lista.component.scss'
})
export class BicicletasListaComponent {
  constructor(private router: Router){}

  goToBicicleta(){
    this.router.navigate(['/bicicleta'])
  }

}
