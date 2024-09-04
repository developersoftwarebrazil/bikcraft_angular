import { Routes } from '@angular/router';
import { BicicletasListaComponent } from './pages/home/bicicletas-lista/bicicletas-lista.component';
import { HomeComponent } from './pages/home/home.component';
import { SegurosComponent } from './pages/home/seguros/seguros.component';
import { TermosComponent } from './pages/termos/termos.component';
import { BicicletasComponent } from './pages/bicicletas/bicicletas.component';
// import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: 'termos', component: TermosComponent },  // Adicione a rota para Termos

  { path: 'bicicletas', component: BicicletasComponent },
  { path: 'bicicletasLista', component: BicicletasListaComponent },
  // { path: 'seguros', component: SegurosComponent },
  // { path: 'contatos', component: ContatosComponent },
  // { path: '**', component: PageNotFoundComponent }  // Rota para páginas não encontradas
];
