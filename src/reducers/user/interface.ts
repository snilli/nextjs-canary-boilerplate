export enum UserType {
  AddUser = 'ADD_USER',
  DeleteUser = 'DELETE_USER'
}

export interface AddUserAction {
  type: UserType.AddUser
  payload: UserState
}

export interface DeleteUserAction {
  type: UserType.DeleteUser
}

export type UserAction = AddUserAction | DeleteUserAction

export interface UserState {
  displayName?: string
  email?: string
  phoneNumber?: string
  photoURL?: string
  providerId: string
  id: string
}
