import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataServiceComponent {
  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number) {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
  }

  getMorePokemons(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getDetailsPokemon(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
