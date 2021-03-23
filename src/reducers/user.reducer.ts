import {AddUserAction, UserAction, UserState, UserType} from './interfaces/user.reducer.interface'

export class UserReducer {
  static create(state: UserState, action: UserAction): UserState | undefined {
    const userReducer = new UserReducer(state)

    switch (action.type) {
      case UserType.AddUser:
        return userReducer.addUser(action as AddUserAction)
      case UserType.DeleteUser : {
        return userReducer.deleteUser()
      }
      default:
        return userReducer.getState()
    }
  }

  private state: UserState | undefined

  constructor(state: UserState) {
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

export function userReducer(state: UserState, action: UserAction): UserState | undefined {
  return UserReducer.create(state, action)
}
