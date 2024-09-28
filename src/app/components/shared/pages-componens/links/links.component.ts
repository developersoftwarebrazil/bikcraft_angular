import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'links-components',
  template: `
  <a class="links" [ngClass]="class" (click)="navigate()">
  {{label}}
  </a>
  `,
  styles: [`
   .links{
      display: inline-block;
      text-transform: uppercase;
      color: var(--cor-p1);
      font: 600 1.125rem/1.35 "Poppins", sans-serif;
      box-shadow: 0 0.0625rem 0.125remrgba(0, 0, 0, 0.1);
      cursor: pointer;

   }
   .links::after{
    content: "";
    display:block;
    width: 100%;
    height: 0.25rem;
    background-color: currentColor;
   }
   .links:hover{
    color: var(--cor-0);
   }

`],
  standalone: true,
  imports: [CommonModule],

})
export class LinksComponent {
  @Input() label: string = "Link";
  @Input() route!: string;
  @Input() class!: string;

  constructor(private router: Router) { }

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }

}
