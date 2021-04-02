import {FC, FunctionComponent, useEffect, useState} from 'react'
import {useAuthContext} from '../contexts/auth.context'
import {useRouter} from 'next/router'
import Loading from '../components/Loading'

const WithAuthUser: () => (ChildrenComponent: FC) => FunctionComponent = () => (ChildrenComponent: FC) => {
  const Auth: FC = (props) => {
    const auth = useAuthContext()
    const getUser = auth.getUser()
    const [user, setUser] = useState(getUser)
    const router = useRouter()
    // const redirectToLogin = useCallback(() => {
    //
    //   auth.getAuth().onAuthStateChanged((user) => {
    //     if (!user) {
    //       void router.replace('/login')
    //     }
    //   })
    // }, [router, auth])

    // useEffect(() => {
    //   if (typeof window === 'undefined') {
    //     return
    //   }
    //   redirectToLogin()
    // }, [redirectToLogin])

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

    return <ChildrenComponent {...props} />
  }

  return Auth
}

export default WithAuthUser
