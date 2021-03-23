export abstract class Reducer<T> {
  protected abstract state: T

  getState(): T {
    return this.state
  }
}
