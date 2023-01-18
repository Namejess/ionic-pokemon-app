import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pokemon/pokemon.module').then((m) => m.PokemonPageModule),
  },
  {
    path: 'detail-pokemon',
    loadChildren: () =>
      import('./detail-pokemon/detail-pokemon.module').then(
        (m) => m.DetailPokemonPageModule
      ),
  },
  {
    path: 'detail-pokemon/:id',
    loadChildren: () =>
      import('./detail-pokemon/detail-pokemon.module').then(
        (m) => m.DetailPokemonPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
