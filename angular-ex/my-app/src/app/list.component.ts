import { Component,Input,EventEmitter,Output } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  providers: [AppService],
  styles: [`
  .info-name{
      font-size: 20px;
  }
  .info-box{
    border-left: 1px solid grey;
    padding: 20px;
    animation: 1s fadeIn;
    animation-fill-mode: forwards;
  }
  .info-border{
    border-bottom: 1px solid grey;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
  `]
})
export class ListComponent {
  trainers: any[];
  i : number;

  constructor(private _appService: AppService){
    this.trainers = this._appService.trainers;
     console.log(this.trainers);
  }

  sendIndex(i){
  }
}
