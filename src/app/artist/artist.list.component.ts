import {Component, Input} from '@angular/core';
import {Artist} from './artist';
import {ArtistService} from '../artist.service';

@Component({
  styleUrls: ['./artist.list.component.css'],
  selector: 'app-artist-list',
  template: `
    TODO: exercise 2
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
