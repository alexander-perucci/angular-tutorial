import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <div>
      <input #myInput type="text">
      <button (click)="emitEvent(myInput.value)">
        Click!
      </button>
    </div>
  `,
  styles: []
})
export class EventsComponent {

  @Output() update = new EventEmitter();
  emitEvent(value) {
    this.update.emit({ text: value });
  }

}
