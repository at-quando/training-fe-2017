import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './article-detail/article-detail.component';
import { ListComponent } from './article-list/article-list.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { EditComponent } from './article-edit/edit.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detail/:id', component: DetailsComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);