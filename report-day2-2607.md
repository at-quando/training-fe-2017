
# FE HOMEWORK

@(FE)[ July 26th 2017 | Do Hong Quan | Report Day 2 ]


----------

[TOC]


-------------
## Event Binding
- Event binding is a data binding from an element to a component. Data obtained from user actions such as keystrokes, mouse movements, clicks, and touches can be bound to component property using event binding. 
- In the event binding, target will be an event name.
- In case we have to pass the value from parent component to child component (whether the value is static or dynamic) we have to use the property binding that mean by doing so we send the value using attribute on component and get there in the parent using @Input annotation for example of property binding below.
```
<my-child [myProp]="prop" />
```
## Property Binding
- This allows you to bind values to properties of an element to modify their behavior or appearance. This can include properties such as class, disabled, href, or textContent.
- Catching the Child's Event/method from the parent component whenever we have to fire some event on click or something else from child component and pass to the parent one we have to use Event Binding see here in the example below -
```
<my-child [myProp]="prop" (onPropChange)="onPropChange($event)" />
```
     
## What are Event Emitters and how it works in Angular
- Event Emitter is using by directives and components to emit custom Events.
- The only API we must access is its emit() method. 
- Simply use it to emit events from your component.
```
@Component({
    selector : 'child',
    template : `
   <button (click)="sendNotification()">Notify my parent!</button>
    `
})
class Child {
    @Output() notifyParent: EventEmitter<any> = new EventEmitter();
    sendNotification() {
        this.notifyParent.emit('Some value to send to the parent');
    }
}
```
```
@Component({
    selector : 'parent',
    template : `
        <child (notifyParent)="getNotification($event)"></child>
    `
})
class Parent {
    getNotification(evt) {
        // Do something with the notification (evt) sent by the child!
    }
}
```
When button in child component was clicked, the function getNotification(evt) of parent component was called.
##Explain the life cycle hooks of Angular application?
Angular manages the life cycle of component, such as: creation, rendering, data-bound properties etc. it also offers hooks that allow us to respond to key life cycle events.
- ngOnChanges - called when an input binding value changes 
- ngOnInit - after the first ngOnChanges
- ngDoCheck - after every run of change detection ngAfterContentInit - after component content initialized 
- ngAfterContentChecked - after every check of component content 
- ngAfterViewInit - after component's view(s) are initialized 
- ngAfterViewChecked - after every check of a component's view(s) 
- ngOnDestroy - just before the component is destroyed

##  Explain the `ContentChild` `ContentChildren` and write an example?

- I think the difference between “child” and “children” is reasonably obvious, the plural form would just indicate more than one, 
- @ContentChild and @ContentChildren work the same way as the equivalent @ViewChild and @ViewChildren 
- However, the key difference is that @ContentChild and
@ContentChildren select from the projected content within the component.
- Again, note that content children will not be set until ngAfterContentInit component
lifecycle hook.
- Example:
```
///App.component.ts
@Component({
	selector: 'app',
	template: `
	  <text-list>
	    <change-text></change-text>
	    <change-text></change-text>
	    <change-text #last ></change-text>
	  </text-list>
	  <p>Calls function on child component classes to randomize color of them.</p>`
})
export class App {
  constructor() {}
}
``` 
```
///text-list.component.ts
import {Component, ContentChild, ContentChildren, QueryList} from '@angular/core';
import {ChangedText} from './change-text.component';

@Component({
	selector: 'text-list',
	template: `
	  <p>Projected content:</p>
    <div>
	    <ng-content></ng-content>
	  </div>
	  <button (click)="onClickAll()">Randomize all</button>
	  <button (click)="onClickLast()">Randomize only</button>`
})
export class TextList {
  @ContentChildren(ChangedText) textChildren: QueryList<ChangedText>;
  @ContentChild('last') lastChild: ChangedText;
  constructor() {}
  ngAfterContentInit() {
    // Content children now set
    this.onClickAll();
  }
  onClickAll() {
    this.textChildren.forEach((child) => child.changedRandomText());
  }

  onClickLast() {
    this.lastChild.changedRandomText();
  }
  
}
```
```
import {Input, Component} from '@angular/core';

@Component({
	selector: 'changedText',
	template: `<p>Hello, {{color}}!</p>`,
})
export class ChangedText {

  constructor() {}
  private changeText() {
      let letters = '0123456789ABCDEF'.split('');
      let color = '';
      for (let i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  changedRandomText() {
    this.color = this.changeText();
  }
}
```
	

##ElementRef? Write an example.
Provides access to the underlying native element (DOM element).

```
import { AfterContentInit, Component, ElementRef } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
    <h1>My App</h1>
    <pre>
      <code>{{ node }}</code>
    </pre>
  `
})
export class AppComponent implements AfterContentInit {
  node: string;

  constructor(private elementRef: ElementRef) { }

  ngAfterContentInit() {
    const tmp = document.createElement('div');
    const el = this.elementRef.nativeElement.cloneNode(true);

    tmp.appendChild(el);
    this.node = tmp.innerHTML;
  }
}
```
Result is 
```
My App
      <app-root>
    <h1>My App</h1>
    <pre>
      <code></code>
    </pre>
  </app-root>
```    
