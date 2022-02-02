import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTriggerPress]'
})
export class TriggerPressDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keydown') triggerPress() {

  }

  buttonPressHandler(event: KeyboardEvent, element: HTMLElement): void {
		const isClick =
			['Enter', 'Space'].includes(event.code) || [KEY_BUTTON.RETURN, KEY_BUTTON.SPACE].includes(event.keyCode);

		if (isClick) {
			element.click();
			event.preventDefault();
			event.stopPropagation();
		}
	}
}