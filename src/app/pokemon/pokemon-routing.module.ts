import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonPage } from './pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonPage,
  },
  {
    path: 'detail-pokemon',
    loadChildren: () =>
      import('../detail-pokemon/detail-pokemon.module').then(
        (m) => m.DetailPokemonPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonPageRoutingModule {}
