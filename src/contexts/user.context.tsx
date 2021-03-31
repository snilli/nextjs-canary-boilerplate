import {createContext, ReactNode, useContext} from 'react'
import {useContainer} from './container.context'
import {UserRepo} from '../core/user/repos/user.repo'

export interface UserContextProps {
  children: ReactNode
}

const UserContext = createContext<UserRepo | undefined>(undefined)
const UserContextProvider = ({children}: UserContextProps): JSX.Element => {
  const repo = useContainer(UserRepo)

  return (
      <UserContext.Provider value={repo}>
        {children}
      </UserContext.Provider>
  )
}

export default UserContextProvider

export const useUserContext = (): UserRepo => useContext(UserContext) as UserRepo
