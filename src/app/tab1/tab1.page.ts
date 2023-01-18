import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public posts: any;
  public numberPost = 20;
  public offset = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.recupPost();
  }

  recupPost() {
    this.http
      .get(
        `https://jsonplaceholder.typicode.com/comments?_start=${this.offset}&_limit=${this.numberPost}`
      )
      .subscribe((data) => {
        this.posts = data;
        console.log(this.posts);
      });
  }

  onIonInfinite(event: any) {
    this.offset += this.numberPost;
    this.recupPost();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
