import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  num: any;
  public shoppingCartItems: any;
  public shoppingCartItem: any;

  constructor(private _productService: ProductService) {
  }
  itemFound() {
    return this._productService.itemFound();
  }
}
