import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PageTitleComponent } from '../../../components/shared/pages-componens/page-title/page-title.component';

@Component({
  selector: 'loja',
  standalone: true,
  imports: [
    CommonModule,
    PageTitleComponent,
  ],
  templateUrl: './loja.component.html',
  styleUrl: './loja.component.scss'
})
export class LojaComponent {
  @Input() imagemIconeHorarioUrl: string = 'assets/img/icones/horario.svg';
  @Input() horarioFuncionamento: string = '08-18h de seg à dom;'

  // RIO DEJANEIRO
  @Input() imagemIconeHorarioAltText: string = 'icone de horário svg'
  @Input() imagemLojaRjUrl: string = 'assets/img/lojas/rj.jpg';
  @Input() imagemLojaRjAltText: string = 'mapa marcando o endereço da rua Ali Perto, 474, Rio de Janeiro - RJ ';

  @Input() enderecoRuaRJ: string = 'Rua: Ali Perto, 25';
  @Input() enderecoBairroRJ: string = 'Bairro: Perto de tudo';
  @Input() enderecoCidadeRJ: string = 'Cidade: Rio de Janeiro - RJ';

  @Input() enderecoEmailAssistenciaRJ: string = "dnadevelopersoftware@gmail.com";
  @Input() emailAssistenciaRJ: string = "@assistenciaRj.bikcraft.com";
  @Input() numeroTelefoneRJ: number = 5519989327757;
  @Input() telefoneRJ: string = "+55 (31) 99999-9999";


  // SÃO PAULO
  @Input() imagemLojaSpUrl: string = 'assets/img/lojas/sp.jpg';
  @Input() imagemLojaSpAltText: string = "mapa marcando o endereço da rua Analândia 474, São Joaquim, Santa Bárbara d'Oeste - São Paulo";

  @Input() enderecoRuaSP: string = 'Rua: Analâdia, 474';
  @Input() enderecoBairroSP: string = 'Bairro: São Joaquim';
  @Input() enderecoCidadeSP: string = "Cidade: Santa Bárbara d'Oeste - SP";

  @Input() enderecoEmailAssistenciaSP: string = "dnadevelopersoftware@gmail.com";
  @Input() emailAssistenciaSP: string = "@assistenciaRj.bikcraft.com";
  @Input() numeroTelefoneSP: number = 5519989327757;
  @Input() telefoneSP: string = "+55 (31) 98932-7757";


}
