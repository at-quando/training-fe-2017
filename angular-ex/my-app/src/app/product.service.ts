import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Product} from './product';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';

@Injectable()
export class ProductService {
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private products: Product[]=[];

  constructor(private http: Http ) {
    this.productsSubject.subscribe(items => this.products = items );
  }

  public addToCart(item: Product) {
    const currentProducts = [...this.products];
    const filterProducts = currentProducts.filter(_ => _.id == item.id);
    if(filterProducts.length==0) {
      item.quantity = 1;
      this.productsSubject.next([...this.products, item]);
    }
    else {
      filterProducts[0].quantity++;
    }
  }

  public getItems(): Observable<Product[]> {
  	return this.productsSubject;
  }

  public deleteItems(item) {
    const after = [...this.products].filter(_ => _.id != item.id);
    this.productsSubject.next(after);
  }

  public getTotal() {
  	return this.productsSubject.map((items: Product[]) => {
  		return items.reduce((prev, curr: Product) => {
  			return prev + curr.price*curr.quantity;
  		}, 0);
  	});
  }

  minusQuantity(ob) {
    ob.quantity--;
  }

  plusQuantity(ob) {
    ob.quantity++;
  }
}
