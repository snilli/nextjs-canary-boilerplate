import {EntityState} from './interfaces/entity.interface'

export class Entity<T extends EntityState = EntityState> {
  protected state: T

  constructor(state: T) {
    this.state = state
  }

  getId(): string {
    return this.state.id
  }

  toJSON(): T {
    return this.state
  }

  toString(): string {
    return JSON.stringify(this.state)
  }

  getState(): T {
    return this.state
  }
}
