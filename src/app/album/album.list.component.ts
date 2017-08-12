import * as _ from 'lodash';
import {Component, Input} from '@angular/core';
import {Album} from './album';
import { AlbumService } from '../album.service';

@Component({
  styleUrls: ['./album.list.component.css'],
  selector: 'app-album-list',
  template: `
    <h3>Albums</h3>
    <div *ngFor="let album of albums">
      <h4>{{album.name}}</h4>
      <div *ngFor="let track of album.tracks">
        {{track}}
      </div>
    </div>
  `
})
export class AlbumListComponent {

  private _artistId;
  albums: Album[];

  constructor(private albumService: AlbumService) { }

  @Input()
  set artistId(id: number) {
    this._artistId = id;
    this.filterAlbumsByArtist();
  }

  onUpdate(album, event) {
    const indexOfTrack = album.tracks.indexOf(event.oldValue);
    album.tracks[indexOfTrack] = event.newValue;
    this.albumService.update(album.id, _.clone(album));
  }

  private filterAlbumsByArtist() {
    this.albums = this.albumService.all().filter(album =>
      album.artistId === this._artistId
    );
  }
}
