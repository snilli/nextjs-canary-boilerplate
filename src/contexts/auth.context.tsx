import {createContext, ReactNode, useContext} from 'react'
import {FirebaseAuth} from '../../libs/src/firebase/firebase-auth'
import {useContainer} from './container.context'

export interface AuthContextProps {
  children: ReactNode
}

const AuthContext = createContext<FirebaseAuth | undefined>(undefined)
const AuthContextProvider = ({children}: AuthContextProps): JSX.Element => {
  const auth = useContainer(FirebaseAuth)

  return (
      <AuthContext.Provider value={auth}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuthContext = (): FirebaseAuth => useContext(AuthContext) as FirebaseAuth
