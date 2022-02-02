import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[styleParent]',
})
export class StyleParentDirective {
  @Input('className') className: string;
  @Input('parentReference') parentReference: HTMLElement;

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus(): void {
    this.addFocusStyle();
  }

  @HostListener('focusout') onFocusOut(): void {
    this.removeFocusStyle();
  }

  removeFocusStyle(): void {
    this.parentReference.classList.remove(this.className);
  }

  private addFocusStyle(): void {
    this.parentReference.classList.add(this.className);
  }
}
