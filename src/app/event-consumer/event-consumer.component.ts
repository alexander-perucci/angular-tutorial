import { Component } from '@angular/core';

@Component({
  selector: 'app-event-consumer',
  template: `<div>
    <p>Click to set text via event</p>
    <app-events (update)="onUpdate($event)"></app-events>
    {{text}}
  </div>`,
  styles: []
})
export class EventConsumerComponent {

  text = 'No update received so far!';

  onUpdate(event) {
    this.text = event.text;
  }

}
