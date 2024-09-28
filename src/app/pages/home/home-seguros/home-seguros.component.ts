import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SeguroComponentsComponent } from "../../../components/shared/pages-componens/seguro-components/seguro-components.component";

@Component({
  selector: 'home-seguros',
  standalone: true,
  imports: [
    CommonModule,
    SeguroComponentsComponent,
  ],

  templateUrl: './home-seguros.component.html',
})
export class HomeSegurosComponent { }
