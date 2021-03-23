import {UserAction, UserState} from './user.reducer.interface'

export interface MainState {
  user: UserState | undefined
}

export type MainAction = UserAction
