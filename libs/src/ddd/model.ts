import {ModelPayload} from './interfaces/model.interface'

export abstract class Model<T extends ModelPayload = ModelPayload> {
  protected abstract state: T

  getId(): string {
    return this.state.id
  }

  toJSON(): T {
    return this.state
  }

  toString(): string {
    return JSON.stringify(this.state)
  }

  setState(state: T): void {
    this.state = state
  }
}
