import {createContext, ReactNode, useContext, useEffect} from 'react'
import {initMainState, mainReducer} from '../reducers/main/mainReducer'
import {MainAction, MainState} from '../reducers/main/interface'
import createPersistedState from 'use-persisted-state'
import {useImmerReducer} from 'use-immer'
import {MainContextValue} from './interfaces/main.context.interface'
import Error from 'next/error'

export interface MainContextProps {
  children: ReactNode
}

const MainContext = createContext<MainContextValue | undefined>(undefined)
const useMainStatePersist = createPersistedState('main-state')
const MainContextProvider = ({children}: MainContextProps): JSX.Element => {
  const state = initMainState()

  const [mainStatePersist, setMainStatePersist] = useMainStatePersist(state)
  const [mainState, dispatch] = useImmerReducer<MainState, MainAction>(mainReducer, mainStatePersist)

  useEffect(() => {
    setMainStatePersist(mainState)
  }, [mainState, setMainStatePersist])

  return (
      <MainContext.Provider value={{mainState, dispatch}}>
        {children}
      </MainContext.Provider>
  )
}

export default MainContextProvider

export const useMainContext: () => MainContextValue = () => {
  const mainContext = useContext(MainContext)
  if (!mainContext) {
    throw new Error({
      title: 'Main context not found',
      statusCode: 404,
    })
  }

  return mainContext
}
