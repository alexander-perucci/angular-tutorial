import {Component, OnInit} from '@angular/core';
import { ArtistService } from './artist.service';
import { AlbumService } from './album.service';
import { sampleArtists, sampleAlbums } from '../assets/sample.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'EclipseCon Europe 2017';

  constructor(
    private artistService: ArtistService,
    private albumService: AlbumService
  ) {

  }

  ngOnInit(): void {
      sampleArtists.forEach(artist => this.artistService.create(artist));
      sampleAlbums.forEach(album => this.albumService.create(album));
  }

}
