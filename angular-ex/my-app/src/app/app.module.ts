import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { DetailsComponent } from './detail.component';
import { BirthdayDirective } from './birthday.directive';
import { ImageDefaultPipe } from './image.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ListComponent,
    BirthdayDirective,
    ImageDefaultPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
