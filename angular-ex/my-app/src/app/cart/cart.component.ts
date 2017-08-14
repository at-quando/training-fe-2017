import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { ProductService } from '../product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  providers: [AppService]
})

export class CartComponent implements OnInit {
  public shoppingCartItems: any;
  public shoppingCartItem: any;
  id: number;

  constructor(private _appService: AppService, 
              private route: ActivatedRoute,
              private _productService: ProductService ) {
    this.shoppingCartItems = this._productService.getItems();
    this.shoppingCartItems.subscribe(items => this.shoppingCartItem = items);
  }

  ngOnInit() {
  }

  public deleteItems(item) {
    this._productService.deleteItems(item);
  }

  public getTotal() {
    return this._productService.getTotal();
  }

  public itemFound() {
    if (this.shoppingCartItem.length ==0) {
      return "No Item Found"
    }
    else {
      return "Your cart have " + this.shoppingCartItem.length + " item(s)";
    }
  }

  minusQuantity(ob) {
    this._productService.minusQuantity(ob);
  }

  plusQuantity(ob) {
    this._productService.plusQuantity(ob);
  }
}
