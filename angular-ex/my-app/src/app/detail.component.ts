import { Component,Input } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
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
export class DetailsComponent {
	@Input() detailInfo: any;
  
}
