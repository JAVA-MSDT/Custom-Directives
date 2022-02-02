import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { KEY_BUTTON } from '../util/buttons';

@Directive({
  selector: '[triggerPress]',
})
export class TriggerPressDirective {
  @Input('targetedElement') targetedElement: HTMLElement;
  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event']) triggerPress(event: KeyboardEvent) {
    if(this.targetedElement) {
      this.buttonPressHandler(event, this.targetedElement);
    } else {
      this.buttonPressHandler(event, this.el.nativeElement);
    }
  }

  buttonPressHandler(event: KeyboardEvent, element: HTMLElement): void {
    const isClick =
      ['Enter', 'Space'].includes(event.code) ||
      [KEY_BUTTON.RETURN, KEY_BUTTON.SPACE].includes(event.keyCode);

    if (isClick) {
      element.click();
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
