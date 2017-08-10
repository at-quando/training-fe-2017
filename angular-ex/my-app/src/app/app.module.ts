import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { EditComponent } from './article-edit/edit.component';
import { DetailsComponent } from './article-detail/article-detail.component';
import { ListComponent } from './article-list/article-list.component';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    ErrorComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
