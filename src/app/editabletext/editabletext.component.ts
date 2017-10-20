
import {Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChange, SimpleChanges, DoCheck} from '@angular/core';

@Component({
  styleUrls: ['./editabletext.component.css'],
  selector: 'app-editable-text',
  template: `
    <span class="editable-container">
      <input class="editable"
             (input)="startEditing()"
             [value]="value"
             #editInput
      >
      <button *ngIf="hasChanged"
              (click)="submit(editInput)"
      >
        Update
      </button>
      <button *ngIf="hasChanged"
              (click)="cancel(editInput)"
      >
        Cancel
      </button>
    </span>
  `
})
export class EditableTextComponent implements OnChanges {

  @Input() value;
  @Output() update = new EventEmitter();
  hasChanged;

  cancel(input) {
    input.value = this.value;
    this.hasChanged = false;
  }

  startEditing() {
    this.hasChanged = true;
  }

  submit(input) {
    this.update.emit({
      oldValue: this.value,
      newValue: input.value
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.hasChanged = false;
  }
}
