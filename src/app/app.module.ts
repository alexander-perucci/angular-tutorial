import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistListComponent } from './artist/artist.list.component';
import { AlbumListComponent } from './album/album.list.component';
import { ArtistService } from './artist.service';
import { AlbumService } from './album.service';
import { SearchBoxComponent } from './searchbox/searchbox.component';
import { EditableTextComponent } from './editabletext/editabletext.component';

@NgModule( {
    declarations: [
        AppComponent,
        ArtistListComponent,
        AlbumListComponent,
        EditableTextComponent,
        SearchBoxComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        ArtistService,
        AlbumService
    ],
    bootstrap: [AppComponent]
} )
export class AppModule { }
