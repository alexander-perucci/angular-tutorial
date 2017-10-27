import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-name',
  template: `
    <p>
      My name is {{name}}
    </p>
  `,
  styles: []
})
export class MyNameComponent {

  @Input() name = 'Earl';

}
