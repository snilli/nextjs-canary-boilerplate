import {MainAction, MainState} from '../../reducers/main/interface'
import {Dispatch} from 'react'

export interface MainContextValue {
  mainState: MainState
  dispatch: Dispatch<MainAction>
}
