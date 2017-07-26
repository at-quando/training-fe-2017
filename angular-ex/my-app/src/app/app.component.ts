import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import { Member } from './member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  
  members: Array<string>;

  constructor(){
  	this.members = [];
  } 
  ngOnInit(){
    this.members.push('Vi Nguyen');
  }
  pushNewMember(e: any){
    this.members.push(e);
  }
}

