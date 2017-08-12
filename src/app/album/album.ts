import {CommonEntity} from '../common/repository';

export class Album implements CommonEntity {
  constructor(
    public artistId: number,
    public name: string,
    public tracks: string[],
    public year?: number,
    public id?: number,
  ) { }
}
