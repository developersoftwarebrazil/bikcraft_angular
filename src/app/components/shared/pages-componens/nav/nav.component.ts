import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

interface NavItem {
  label: string;
  link: string;
  classes?: string; // Opicional para classes adicionais
}

@Component({
  selector: 'nav-component',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './nav.component.html',
})
export class NavComponent {
  @Input() navItems: NavItem[] = [];
  @Input() ariaLabel!: string;
  @Input() ulClasses!: string;

}
