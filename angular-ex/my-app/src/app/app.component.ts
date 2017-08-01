import { Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import {ListComponent} from './list.component';
import {DetailsComponent} from './detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  trainers: any[];
  teamColor: boolean;
  id: number;
  @ViewChild(ListComponent) list: ListComponent;
  @ViewChild(DetailsComponent) details: DetailsComponent;

  ngOnInit() {
    this.list.sendIndex = (id: any) => {
      this.id = id;
    }
  }
}
