import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'contato',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  @Input() sectionClass: string = 'contato-dados';

  @Input() enderecoRua: string = "Rua: Analândia 474";
  @Input() enderecoBairro: string = "São Joaquim";
  @Input() enderecoCidade: string = "Santa Bárbara d'Oeste - SP";

  @Input() numeroTelefone: number = 5519989327757;
  @Input() telefone: string = "+55 (19) 98932-5777";
  @Input() enderecoEmail: string = "dnadevelopersoftware@gmail.com";
  @Input() email: string = "@contato.bikcraft.com";
  @Input() enderecoEmailAssistencia: string = "dnadevelopersoftware@gmail.com";
  @Input() emailAssistencia: string = "@assistencia.bikcraft.com";

  @Input() imgUrlInstagram: string = "assets/img/redes/instagram-p.svg";
  @Input() instagramAltText: string = "Instagram";
  @Input() imgUrlFace: string = "assets/img/redes/facebook-p.svg";
  @Input() faceAltText: string = "Facebook";
  @Input() imgUrlYoutube: string = "assets/img/redes/youtube-p.svg";
  @Input() youtubeAltText: string = "Instagram";

  @Input() formatoTelefone: string = '+55 19 99999-9999'

}
