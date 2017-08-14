import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AppService {
  products: any;

  constructor(private http: Http ) {
    this.products = [];
  }

  getAll() {
    return this.http.get('http://localhost:4200/assets/product.json')
           .map(res => res.json());
  }
}