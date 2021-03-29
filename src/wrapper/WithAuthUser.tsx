import {FC, FunctionComponent, useCallback, useEffect} from 'react'
import {useAuthContext} from '../contexts/auth.context'
import {useRouter} from 'next/router'
import Loading from '../components/Loading'

const WithAuthUser: () => (ChildrenComponent: FC) => FunctionComponent = () => (ChildrenComponent: FC) => {
  const Auth: FC = (props) => {
    const auth = useAuthContext()
    const user = auth?.getUser()
    const router = useRouter()
    const redirectToLogin = useCallback(() => {
      if (!user) {
        void router.replace('/login')
      }
    }, [router, user])

    useEffect(() => {
      if (typeof window === 'undefined') {
        return
      }
      redirectToLogin()
    }, [redirectToLogin])

    if (!user) {
      return <Loading />
    }

    return <ChildrenComponent {...props} />
  }

  return Auth
}

export default WithAuthUser
