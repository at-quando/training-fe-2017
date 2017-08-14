import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html'
})

export class DetailComponent {
  private sub: any;
  products: any ;
  product: any ;
  id: number;

  constructor(private _appService: AppService, 
              private route: ActivatedRoute,
              private _productService: ProductService) {
    this.product = {id:"", name:"", image:"", content:"", price: ""};
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
      this._appService.getAll().subscribe(
        data => {
          this.product = data.products[this.id];
        },
      err => console.log("can't get data",err.status, err.url),
       () => console.log("Get complete")
      );
    });
  }
  
  addToCart(item) {
    this._productService.addToCart(item);
  }
}
