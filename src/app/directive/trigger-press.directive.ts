import { Directive, ElementRef, HostListener } from '@angular/core';
import { KEY_BUTTON } from '../util/buttons';

@Directive({
  selector: '[appTriggerPress]',
})
export class TriggerPressDirective {
  eventFired: KeyboardEvent;
  constructor(private el: ElementRef) {
    this.eventFired = this.el.nativeElement.event;
    console.log(el.nativeElement)
  }

  @HostListener('keydown') triggerPress() {
    console.log(this.eventFired);
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
