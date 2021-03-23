import {MainAction, MainState} from './interface'
import {UserReducer} from '../user/user.reducer'

export function MainReducer(state: MainState, action: MainAction): MainState {
  return {
    user: UserReducer.create(state.user, action),
  }
}
