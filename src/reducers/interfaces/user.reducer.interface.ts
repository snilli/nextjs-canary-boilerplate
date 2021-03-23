import {Action} from './reducer.interface'

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

export type UserAction = AddUserAction | DeleteUserAction | Action

export interface UserState {
  displayName?: string
  email?: string
  phoneNumber?: string
  photoURL?: string
  providerId: string
  uid: string
  token: UserToken
}

export interface UserToken {
  token: string
  expirationTime: string
  authTime: string
  issuedAtTime: string
  signInProvider?: string
  signInSecondFactor?: string
  claims: {
    [key: string]: any
  }
}

export interface UserReducerOption {
  state: UserState
}
