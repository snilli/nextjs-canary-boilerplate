import {createContext, ReactNode, useContext} from 'react'
import {container, DependencyContainer, InjectionToken} from 'tsyringe'

export interface ContainerContextProps {
  children: ReactNode
}

const ContainerContext = createContext<DependencyContainer>(container)
const ContainerContextProvider = ({children}: ContainerContextProps): JSX.Element => {
  return (
      <ContainerContext.Provider value={container}>
        {children}
      </ContainerContext.Provider>
  )
}

export default ContainerContextProvider

export const useContainer = <T extends unknown>(token: InjectionToken<T>): T => {
  return useContext(ContainerContext).resolve(token) as T
}
