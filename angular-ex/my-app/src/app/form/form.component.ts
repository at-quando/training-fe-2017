import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {AppComponent} from '../app.component'
import { Member } from '../member';

@Component({
  selector: 'form',
  templateUrl: './form.component.html'
})

export class FormComponent implements  OnInit {
  @Input() private dataset1: any[] = [];
  $id =1 ;
  ngOnInit() {
    console.log(this.dataset1);
  }
 addMember(str) {
    var currentMember = new Member(this.$id,str);
    this.dataset1.push(currentMember);
    this.$id++;
  }
}






  

