
import { Routes } from '@angular/router';
import { BicicletaMagicComponent } from './pages/bicicleta/bicicleta-magic/bicicleta-magic.component';
import { BicicletaNebulaComponent } from './pages/bicicleta/bicicleta-nebula/bicicleta-nebula.component';
import { BicicletaNimbusComponent } from './pages/bicicleta/bicicleta-nimbus/bicicleta-nimbus.component';
import { BicicletasComponent } from './pages/bicicleta/bicicletas.component';
import { HomeBicicletasListaComponent } from './pages/home/home-bicicletas-lista/home-bicicletas-lista.component';
import { HomeComponent } from './pages/home/home.component';
import { SeguroComponent } from './pages/seguro/seguro.component';
import { TermosComponent } from './pages/termo/termos.component';
import { ContatosComponent } from './pages/contatos/contatos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: 'homebicicletasLista', component: HomeBicicletasListaComponent },
  { path: 'contato', component: ContatosComponent },
  { path: 'termos', component: TermosComponent },  // Adicione a rota para Termos
  { path: 'seguros', component: SeguroComponent },
  { path: 'bicicletas', component: BicicletasComponent },


  { path: 'bicicletas/bicicleta-nimbus', component: BicicletaNimbusComponent },
  { path: 'bicicletas/bicicleta-magic', component: BicicletaMagicComponent },
  { path: 'bicicletas/bicicleta-nebula', component: BicicletaNebulaComponent },
  { path: '**', redirectTo: '/bicicletas' }, // Redireciona para "Bicicletas" caso a rota não exista

  // { path: '**', component: PageNotFoundComponent }  // Rota para páginas não encontradas
];
