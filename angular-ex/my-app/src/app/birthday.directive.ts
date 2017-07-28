import { Directive, Input, TemplateRef, ViewContainerRef,ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[emptyData]',
})

export class BirthdayDirective {
  @Input() emptyData: any;
	constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) { }

  ngOnInit(){
    if(!this.emptyData )
    {
      let insteadElm = this.renderer.createElement(this.el.nativeElement.parentNode, 'span');
      this.renderer.setElementClass(insteadElm,'text-empty', true);
      insteadElm.innerHTML= "empty"
      var parent = this.el.nativeElement.parentNode;
      parent.insertBefore(insteadElm,this.el.nativeElement);
      this.el.nativeElement.remove();
      //this.el.nativeElement.innerHTML= "empty";
    }
    else{
      this.el.nativeElement.innerHTML= this.emptyData;
    }
  }
}
