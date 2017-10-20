import * as _ from 'lodash';
import { Repository, CommonEntity } from './repository';

export class InMemoryRepository<ENTITY extends CommonEntity> implements Repository<ENTITY> {

  private entities;
  private currentId;

  constructor() {
    this.entities = [];
    this.currentId = 0;
  }

  clear(): void {
    this.entities = [];
  }

  all(): ENTITY[] {
    return this.entities;
  }

  update(id: number, entity: ENTITY): void {
    const foundEntity = this.findById(entity.id);
    if (foundEntity === undefined) {
      return;
    } else {
      const index = this.entities.indexOf(foundEntity);
      this.entities[index] = entity;
    }
  }

  findById(id: number): ENTITY {
    return this.entities.find(e => e.id === id);
  }

  create(entity: ENTITY) {
    entity.id = this.currentId;
    this.entities[this.currentId] = _.clone(entity);
    this.currentId += 1;
  }

  removeById(id: number): boolean {
    const foundEntity = this.findById(id);
    if (foundEntity === undefined) {
      return false;
    } else {
      const index = this.entities.indexOf(foundEntity);
      this.entities.splice(index, 1);
      return true;
    }
  }

  findByName(name: string): ENTITY[] {
    if (_.isEmpty(name)) {
      return this.all();
    }
    return this.all().filter(e => e.name.indexOf(name) > -1);
  }
}
