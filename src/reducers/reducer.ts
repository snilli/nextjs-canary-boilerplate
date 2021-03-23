interface Action {
  type: string
  payload?: any
}

export abstract class Reducer<T> {
  protected abstract state: T

  getState(): T {
    return this.state
  }
}

export const isAction = <T extends Action>(action: Action, actionName: string): action is T => {
  return actionName === action.type
}
