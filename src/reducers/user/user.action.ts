import {AddUserAction, DeleteUserAction, UserState, UserType} from './interface'

export class UserAction {
  static addUser(user: UserState): AddUserAction {
    return {
      type: UserType.AddUser,
      payload: user,
    }
  }

  static deleteUser(): DeleteUserAction {
    return {
      type: UserType.DeleteUser,
    }
  }
}
