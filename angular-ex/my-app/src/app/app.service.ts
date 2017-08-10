import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AppService {
  articles: any;

  constructor(private http: Http ){
    this.articles = [];
    http.get('http://localhost:4200/assets/article.json').subscribe(res => this.articles = res.json().articles);
  }

  getAll(){
    return this.http.get('http://localhost:4200/assets/article.json')
           .map(res => res.json());
  }
}
