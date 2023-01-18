import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public id: any;
  public postData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  recupPost(id?: number) {
    this.http
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .subscribe((data) => {
        this.postData = data;
        console.log(this.postData);
      });
  }
}
