import { Routes } from '@angular/router';
import { BicicletasComponent } from './pages/bicicletas/bicicletas.component';
import { HomeBicicletasListaComponent } from './pages/home/home-bicicletas-lista/home-bicicletas-lista.component';
import { HomeComponent } from './pages/home/home.component';

import { BicicletaMagicComponent } from './pages/bicicletas/bicicleta-magic/bicicleta-magic.component';
import { BicicletaNebulaComponent } from './pages/bicicletas/bicicleta-nebula/bicicleta-nebula.component';
import { BicicletaNimbusComponent } from './pages/bicicletas/bicicleta-nimbus/bicicleta-nimbus.component';
import { SeguroComponent } from './pages/seguro/seguro.component';
import { TermosComponent } from './pages/termos/termos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: 'homebicicletasLista', component: HomeBicicletasListaComponent },
  { path: 'termos', component: TermosComponent },  // Adicione a rota para Termos
  { path: 'seguros', component: SeguroComponent },
  { path: 'bicicletas', component: BicicletasComponent },


  { path: 'bicicletas/bicicleta-nimbus', component: BicicletaNimbusComponent },
  { path: 'bicicletas/bicicleta-magic', component: BicicletaMagicComponent },
  { path: 'bicicletas/bicicleta-nebula', component: BicicletaNebulaComponent },
  { path: '**', redirectTo: '/bicicletas' }, // Redireciona para "Bicicletas" caso a rota não exista

  // { path: 'contatos', component: ContatoComponent },
  // { path: '**', component: PageNotFoundComponent }  // Rota para páginas não encontradas
];
