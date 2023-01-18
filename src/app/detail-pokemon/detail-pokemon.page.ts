import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.page.html',
  styleUrls: ['./detail-pokemon.page.scss'],
})
export class DetailPokemonPage implements OnInit {
  public pokemon: any;
  pokemons: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataServiceComponent
  ) {}

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.dataService.getMorePokemons(pokemonId).subscribe((response: any) => {
        this.pokemon = response;
      });
    }
  }

  goBack() {
    this.router.navigate(['/tabs/pokemon']);
  }
}
