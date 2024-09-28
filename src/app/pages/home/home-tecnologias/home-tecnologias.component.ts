import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LinksComponent } from "../../../components/shared/pages-componens/links/links.component";


interface Tecnologia {
  tecnlogiaListaImagemUrl: string;
  tecnlogiaListaAltText: string;
  tecnlogiaListaImageTitulo: string;
  tecnlogiaListaImagedescricao: string;
}
@Component({
  selector: 'home-tecnologias',
  standalone: true,
  imports: [
    CommonModule,
    LinksComponent
],
  templateUrl: './home-tecnologias.component.html',
  styleUrl: './home-tecnologias.component.scss'
})
export class HomeTecnologiasComponent implements OnInit {

  @Input() tecnologiaSubtitle: string = 'Técnologias Avançada';
  @Input() tecnologiaTitle: string = 'você escolhe as suas cores e componentes';
  @Input() tecnologiaDescriptions: string = "Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas para o seu corpo e altura, garantindo maior conforto e ergonomia na sua pedalada. Você pode também personalizar completamenta as suas cores.";

  @Input() tecnologiaImageUrl: string = 'assets/img/fotos/tecnologia.jpg';
  @Input() tenologiaImageAlt: string = "imagem decorativa";

  tecnologias: Tecnologia[] = [
    {
      tecnlogiaListaImagemUrl: 'assets/img/icones/eletrica.svg', // Atualize com o caminho correto
      tecnlogiaListaAltText: 'Motor elétrico',
      tecnlogiaListaImageTitulo: 'Motor Elétrico',
      tecnlogiaListaImagedescricao: 'Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.'
    },
    {
      tecnlogiaListaImagemUrl: 'assets/img/icones/rastreador.svg', // Atualize com o caminho correto
      tecnlogiaListaAltText: 'Rastreador',
      tecnlogiaListaImageTitulo: 'Rastreador',
      tecnlogiaListaImagedescricao: 'Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.'
    }
  ];

  constructor() { }
  ngOnInit(): void { }

}
