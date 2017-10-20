import {Component, Input} from '@angular/core';
import {Artist} from './artist';
import {ArtistService} from '../artist.service';

@Component({
  styleUrls: ['./artist.list.component.css'],
  selector: 'app-artist-list',
  template: `
    <div *ngFor="let artist of filteredArtists">
      <h2>{{artist.name}}</h2>
      <div class="artist-container">
        <img class="artist-image" [src]="artist.imagePath">
        <app-album-list class="albums" [artistId]="artist.id">
        </app-album-list>
      </div>
    </div>
  `
})
export class ArtistListComponent {

  filteredArtists: Artist[];

  constructor(private artistService: ArtistService) {
    this.filteredArtists = this.artistService.all();
  }

  @Input()
  set artistName(term: string) {
    this.filteredArtists = this.artistService.findByName(term);
  }
}
