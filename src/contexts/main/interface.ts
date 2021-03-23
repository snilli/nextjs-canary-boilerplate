import {MainAction, MainState} from '../../reducers/main/interface'
import {Dispatch, ReactNode} from 'react'

export interface MainContextProviderValue {
  mainState: MainState
  dispatch: Dispatch<MainAction>
}

export interface MainContextProps {
  children: ReactNode
}
