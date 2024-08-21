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
  styles: [''],
  standalone: true,
  imports: [CommonModule],

})
export class LinksComponent {
  @Input() label: string = "Link"
  @Input() class: string = ""
  @Input() route: string = "/"

  constructor(private router: Router) { }

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }

}
