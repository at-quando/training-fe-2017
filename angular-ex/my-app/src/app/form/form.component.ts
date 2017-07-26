import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AppComponent} from '../app.component'
import { Member } from '../member';

@Component({
  selector: 'form',
  templateUrl: './form.component.html'
})

export class FormComponent {
  @Output() result: EventEmitter<string> = new EventEmitter<string>();
  name: string;

  constructor(){

  }

  ngOnInit(){

  }

  newMember(){
    this.result.emit(this.name);
  }
}






  

