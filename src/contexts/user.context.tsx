import {createContext, ReactNode, useContext} from 'react'
import {useContainer} from './container.context'
import {UserRepo} from '../core/user/repos/user.repo'
import Error from 'next/error'

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

export const useUserContext = (): UserRepo => {
  const userContext = useContext(UserContext)
  if (!userContext) {
    throw new Error({
      title: 'User context not found',
      statusCode: 404,
    })
  }

  return userContext
}
