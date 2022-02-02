import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  displayText = false;
  displaySpan = false;

  toggleDisplay(): void {
    this.displayText = !this.displayText;
  }

  toggleDisplaySpan(): void {
    this.displaySpan = !this.displaySpan;
  }
}
