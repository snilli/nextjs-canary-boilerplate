import {createContext, useContext, useEffect} from 'react'
import {initMainState, mainReducer} from '../reducers/main/mainReducer'
import {MainAction, MainState} from '../reducers/main/interface'
import createPersistedState from 'use-persisted-state'
import {useImmerReducer} from 'use-immer'
import {ContainerContextProviderValue, MainContextProps} from './interfaces/main.context.interface'
import {container} from 'tsyringe'

const MainContext = createContext<ContainerContextProviderValue | undefined>(undefined)
const useMainStatePersist = createPersistedState('main-state')

const MainContextProvider = ({children}: MainContextProps): JSX.Element => {
  const state = initMainState()

  const [mainStatePersist, setMainStatePersist] = useMainStatePersist(state)
  const [mainState, dispatch] = useImmerReducer<MainState, MainAction>(mainReducer, mainStatePersist)

  useEffect(() => {
    setMainStatePersist(mainState)
  }, [mainState, setMainStatePersist])

  return (
      <MainContext.Provider value={{mainState, dispatch, container}}>
        {children}
      </MainContext.Provider>
  )
}

export default MainContextProvider

export const useMainContext: () => ContainerContextProviderValue | undefined = () => useContext(MainContext)
