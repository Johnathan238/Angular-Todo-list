import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('aria-hidden.true') isOpen = false
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen
  }
  constructor() { }

}
