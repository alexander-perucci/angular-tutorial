import { Injectable } from '@angular/core';
import { InMemoryRepository } from './common/in-memory-repo';
import { Artist } from './artist/artist';

@Injectable()
export class ArtistService extends InMemoryRepository<Artist> {

}
