import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `<div>
    Click to set text via click
    <input #myRef type="text">
    <button (click)="setName(myRef.value)">Set the name!</button>
    <p>My name is {{name}}</p>
  </div>`,
  styles: []
})
export class InputComponent {

  name = 'empty';

  setName(value) {
    this.name = value;
  }

}
