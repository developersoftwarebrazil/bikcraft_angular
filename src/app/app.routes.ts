import { Routes } from '@angular/router';
import { BicicletasComponent } from './pages/bicicletas/bicicletas.component';
import { HomeBicicletasListaComponent } from './pages/home/home-bicicletas-lista/home-bicicletas-lista.component';
import { HomeComponent } from './pages/home/home.component';
import { TermosComponent } from './pages/termos/termos.component';
import { SegurosComponent } from './pages/seguros/seguros.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: 'homebicicletasLista', component: HomeBicicletasListaComponent },

  { path: 'termos', component: TermosComponent },  // Adicione a rota para Termos
  { path: 'bicicletas', component: BicicletasComponent },
  { path: 'seguros', component: SegurosComponent },
  // { path: 'contatos', component: ContatosComponent },
  // { path: '**', component: PageNotFoundComponent }  // Rota para páginas não encontradas
];
