import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {AlbumListComponent} from './album/album.list.component';
import {ArtistListComponent} from './artist/artist.list.component';
import {AlbumService} from './album.service';
import {ArtistService} from './artist.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ArtistListComponent,
        AlbumListComponent
      ],
      providers: [
        ArtistService,
        AlbumService
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('EclipseCon Europe 2017');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome');
  }));
});
