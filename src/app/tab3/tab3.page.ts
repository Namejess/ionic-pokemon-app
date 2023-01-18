import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public titre: any;
  public texte: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.recupPosts(id);
  }

  public recupPosts(id: any): void {
    let data: Observable<any>;
    let url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    data = this.http.get(url);
    data.subscribe((resultat) => {
      this.titre = resultat.title;
      this.texte = resultat.body;
    });
  }

  ngOnInit() {}
}
