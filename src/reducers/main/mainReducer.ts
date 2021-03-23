import {MainAction, MainState} from './interface'
import {UserReducer} from '../user/user.reducer'

export const initMainState = (): MainState => {
  return {
    user: undefined,
  }
}

export const mainReducer = (state: MainState, action: MainAction): MainState => {
  return {
    user: UserReducer.create(state.user, action),
  }
}
