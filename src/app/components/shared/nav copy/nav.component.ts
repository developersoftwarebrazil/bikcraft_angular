import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from "@angular/core";

@Component({
  selector: 'nav-component',
  standalone: true,
  imports: [CommonModule],

  templateUrl:'./nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements AfterViewInit {

  @Input() ariaLabel: string = '';
  @Input() ulClass: string = '';
  @Input() links: { label: string, url: string }[] = [];


  constructor(
    private elementeRef: ElementRef,
    private render: Renderer2
  ) { }

  ngAfterViewInit() {
    if (this.ariaLabel) {
      this.render.setAttribute(this.elementeRef.nativeElement, 'aria-label', this.ariaLabel);
    }
  }
}
