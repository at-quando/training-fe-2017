import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'detail',
  templateUrl: './article-detail.component.html',
  providers: [AppService]
})

export class DetailsComponent {
  private sub: any;
  articles: any ;
  article: any ;
  id: number;

  constructor(private _appService: AppService, private route: ActivatedRoute) {
    this.article = {id:"", title:"", image:"", content:"", author: ""};
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
      this._appService.getAll().subscribe(
        data => {
          this.article = data.articles[this.id];
        },
      err => console.log("can't get data",err.status, err.url),
       () => console.log("Get complete")
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
