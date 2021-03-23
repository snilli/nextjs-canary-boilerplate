import {AddUserAction, UserAction, UserState, UserType} from './interface'
import {isAction, Reducer} from '../reducer'

export class UserReducer extends Reducer<UserState | undefined> {
  static create(state: UserState | undefined, action: UserAction): UserState | undefined {
    const userReducer = new UserReducer(state)

    if (isAction(action, UserType.AddUser)) {
      return userReducer.addUser(action)
    } else if (isAction(action, UserType.DeleteUser)) {
      return userReducer.deleteUser()
    } else {
      return userReducer.getState()
    }
  }

  protected state: UserState | undefined

  constructor(state: UserState | undefined) {
    super()
    this.state = state
  }

  getState(): UserState | undefined {
    return this.state
  }

  private addUser(action: AddUserAction): UserState {
    this.state = action.payload

    return this.state
  }

  private deleteUser(): undefined {
    this.state = undefined

    return this.state
  }
}
