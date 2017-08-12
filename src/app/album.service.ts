import { Injectable } from '@angular/core';
import { InMemoryRepository } from './common/in-memory-repo';
import { Album } from './album/album';

@Injectable()
export class AlbumService extends InMemoryRepository<Album> {

}
