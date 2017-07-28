import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import { Member } from './member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  hello: string;
  name: string;
  $id=1;
  private members: any[] = [
  	new Member(1,"Quan"),
  	new Member(2,"Qa"),
  	new Member(3,"aaa"),
  ];
  @ViewChild(ListComponent) list: ListComponent;
  @ViewChild(FormComponent) form: FormComponent;
  constructor(){
  	this.hello = "hello world!";
  } 
  deleteMemberApp(id){
   this.list.deleteMember(id) ;
  }
  addMemberApp(str){
  	this.form.addMember(str);
  }
}

