import { Component, OnInit } from '@angular/core';
import { DataServiceComponent } from '../data-service/data-service.component';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  pokemons: any[] = [];
  offset = 0;
  numberPokemon = 8;
  totalPokemons: number | undefined;
  searchTerm: string | undefined;
  searchResults: any[] | undefined;
  public test: any;

  constructor(
    private dataService: DataServiceComponent,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons() {
    this.dataService
      .getPokemons(this.numberPokemon, this.offset)
      .subscribe((response: any) => {
        this.totalPokemons = response;
        response.results.forEach((result: any) => {
          this.dataService
            .getMorePokemons(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
            });
        });
      });
  }

  public onIonInfinite(event: any) {
    this.offset += this.numberPokemon;
    this.getPokemons();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, this.numberPokemon);
  }

  goToDetails(pokemon: any) {
    this.router.navigate(['/detail-pokemon/', pokemon.id]);
  }

  // public search() {
  //   this.searchResults = this.pokemons.filter((pokemon) =>
  //     pokemon.name.includes(this.searchTerm)
  //   );
  // }
}
