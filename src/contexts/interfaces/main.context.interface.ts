import {MainAction, MainState} from '../../reducers/main/interface'
import {Dispatch, ReactNode} from 'react'
import DependencyContainer from 'tsyringe/dist/typings/types/dependency-container'

export interface ContainerContextProviderValue {
  mainState: MainState
  dispatch: Dispatch<MainAction>
  container: DependencyContainer
}

export interface MainContextProps {
  children: ReactNode
}
