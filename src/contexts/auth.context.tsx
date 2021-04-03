import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {FirebaseAuth} from '../../libs/src/firebase/firebase-auth'
import {useContainer} from './container.context'
import Error from 'next/error'
import {useRouter} from 'next/router'
import Loading from '../components/Loading'

export interface AuthContextProps {
  children: ReactNode
}

const AuthContext = createContext<FirebaseAuth | undefined>(undefined)
const AuthContextProvider = ({children}: AuthContextProps): JSX.Element => {
  const auth = useContainer(FirebaseAuth)

  const getUser = auth.getUser()
  const [user, setUser] = useState(getUser)
  const router = useRouter()

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        void router.replace('/login')
      } else {
        setUser(currentUser)
      }
    })

    return () => unSubscribe()
  }, [auth, router])

  if (!user) {
    return <Loading />
  }

  return (
      <AuthContext.Provider value={auth}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuthContext = (): FirebaseAuth => {
  const authContext = useContext(AuthContext)
  if (!authContext) {
    throw new Error({
      title: 'Auth context not found',
      statusCode: 404,
    })
  }

  return authContext
}
