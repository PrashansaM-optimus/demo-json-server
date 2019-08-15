import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-json-server';
  data: any;

  constructor(private http: HttpClient) { }

  getAllPosts() {
    this.http.get('http://localhost:3000/posts').subscribe((response) => {
      this.data = response;
    });
  }

  addPost() {
    this.http.post('http://localhost:3000/posts', {
      "id": 3,
      "title": "json3",
      "author": "typicode3"
    }).subscribe((response) => {
      this.data = response;
    });
  }

  deletePost() {
    this.http.delete('http://localhost:3000/posts/3').subscribe((response) => {
      this.data = response;
    });
  }

}
