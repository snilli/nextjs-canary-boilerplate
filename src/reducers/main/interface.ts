import {UserAction, UserState} from '../user/interface'

export interface MainState {
  user?: UserState
}

export type MainAction = UserAction
