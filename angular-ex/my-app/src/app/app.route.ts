import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'detail/:id', component: DetailComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);