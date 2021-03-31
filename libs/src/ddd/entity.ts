import {EntityState} from './interfaces/entity.interface'
import {serializer} from '../../../src/utils/json'

export class Entity<T extends EntityState = EntityState> {
  protected state: T

  constructor(state: T) {
    this.state = state
  }

  getId(): string {
    return this.state.id
  }

  toJSON(): T {
    return serializer(this.state)
  }

  toString(): string {
    return JSON.stringify(this.state)
  }

  getState(): T {
    return this.state
  }
}
