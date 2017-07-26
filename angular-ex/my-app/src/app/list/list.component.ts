import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() data: string;

  constructor(){
    console.log(this.data);
  }
  ngOnInit() {
        console.log(this.data);
    }  
 }




  
