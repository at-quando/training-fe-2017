import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { ProductService } from './product.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { routing, appRoutingProviders } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CartComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [AppService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
