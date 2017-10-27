import { Component } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `<app-my-name [name]="firstName"></app-my-name>`,
  styles: []
})
export class AnotherComponent {
  firstName = 'Joe';
}
