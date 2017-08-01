import { Component,Input, SimpleChanges, OnChanges } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  providers: [AppService]
})
export class DetailsComponent implements OnChanges {
  trainers: any[];
  @Input() id: number;
  detailInfo: any;

  constructor(private _appService: AppService){
    this.trainers = this._appService.trainers;
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.id)
    {
    this.detailInfo = null;
    setTimeout( () => {
      this.detailInfo = this._appService.getDetails(this.id);
      });
    }
  }
}

