import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @Input() private dataset: any[] = [];
  
  title = 'Tour of Heroes';

  ngOnInit() {
        console.log(this.dataset);
    }  
  deleteMember(id){
    for(let i = 0; i < this.dataset.length; i++) {
    if (this.dataset[i].id === id) {
        this.dataset.splice(i, 1);
        break;
    }
  }
  }} 




  
