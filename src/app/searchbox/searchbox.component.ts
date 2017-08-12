
import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-searchbox',
  template: `<div class="is-component">
    <label class="search-label" for="search-input">Filter artist</label>
    <input id="search-input" (keyup)="changed($event)">
  </div>
  `,
  styleUrls: ['./searchbox.component.css']
})
export class SearchBoxComponent {

  searchTerm;

  changed(event) {
    this.searchTerm = event.target.value;
  }

}
