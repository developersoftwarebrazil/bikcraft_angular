import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';


@Component({
  selector: 'footers',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() marcaImgUrl: string = "assets/bikcraft.svg";
  @Input() marcarAtlText: string = "marca svg";
  @Input() contatoTitle: string = "Contato";
  @Input() numeroTelefone: number = 5519989327757;
  @Input() telefone: string = "(19) 98932-5777";
  @Input() enderecoEmail: string = "dnadevelopersoftware@gmail.com";
  @Input() email: string = "@contato.bikcraft.com";
  @Input() enderecoRua: string = "Rua: Analândia 474";
  @Input() enderecoBairro: string = "São Joaquim";
  @Input() enderecoCidade: string = "Santa Bárbara d'Oeste - SP";
  @Input() imgUrlInstagram: string = "assets/img/redes/instagram.svg";
  @Input() instagramAltText: string = "Instagram";
  @Input() imgUrlFace: string = "assets/img/redes/facebook.svg";
  @Input() faceAltText: string = "Facebook";
  @Input() imgUrlYoutube: string = "assets/img/redes/youtube.svg";
  @Input() youtubeAltText: string = "Instagram";
  @Input() informacoesTitle: string = "Informações";
  @Input() copyright: string = "Bikcraft @ Alguns direitos reservados.";

}
