import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [AppService]
})

export class ListComponent {
  products: any;

  constructor( private _appService: AppService, 
               private router: Router, 
               private _productService: ProductService ) {
    this._appService.getAll().subscribe(
      data => {
        this.products = data.products;
      },
      err => console.log("can't get data",err.status, err.url),
      () => console.log("Get complete")
    ); 
  }
  
  addToCart(obj) {
    this._productService.addToCart(obj);
    this.router.navigate(['/']);
  }
}
