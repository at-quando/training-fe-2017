import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailsComponent } from './detail.component';
import { BirthdayDirective } from './birthday.directive';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    BirthdayDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
