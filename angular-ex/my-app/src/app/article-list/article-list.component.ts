import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'list',
  templateUrl: './article-list.component.html',
  providers: [AppService]
})

export class ListComponent {
  articles: any[];
  i : number;

  constructor(private _appService: AppService) {
    this._appService.getAll().subscribe(
      data => {
        this.articles = data.articles;
      },
      err => console.log("can't get data",err.status, err.url),
      () => console.log("Get complete")
    );
  }
}

