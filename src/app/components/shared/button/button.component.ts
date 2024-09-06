import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'button-component',
  template: `
    <button class="botao" [ngClass]="class" (click)="navigate()">
      {{ label }}
    </button>
  `,
  styles: [`
    .botao {
      display: inline-block;
      padding: 1rem 2rem;
      border: none;
      border-radius: 0.25rem; /* 4px */
      background: linear-gradient(#ffbf00, #f2a50c);
      text-transform: uppercase;
      color: var(--cor-p5);
      font: 600 1.125rem/1.35 "Poppins", sans-serif;
      box-shadow: 0 0.0625rem 0.125remrgba(0, 0, 0, 0.1);
      cursor: pointer;
      max-width: max-content;
    }

    .botao:hover {
      background: linear-gradient(#ffb60d, #e59317);
    }
    .botao.secundario{
      background: var(--cor-10);
      color: var(--cor-2);
    }
    .botao.secundario:hover{
      background: var(--cor-9);
    }
    .botao.seta{
      display: flex;
      align-items:center;
    }
    .botao.seta::after{
      display:inline-block;
      content:'';
      width: 1.125rem; /* 18px */
      height: 0.625rem; /* 10px */
      margin-left: 0.75rem; /* 12px */
      background: url("/assets/img/icones/seta.svg");
      background-size: contain;
      background-repeat: no-repeat;
      transition: transform 0.2s;
    }
    .botao.seta:hover::after{
      transform: translateX(.25rem);//4px
    }
    @media (max-width: 37.5rem) { /* 600px */
      .botao {
        padding: 0.75rem 1rem; /* 12px 16px */
        font-size: 1rem;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() route!: string;
  @Input() class!: string;

  constructor(private router: Router) { }

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
