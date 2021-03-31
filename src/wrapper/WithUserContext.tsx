import {FC, FunctionComponent} from 'react'
import UserContextProvider from '../contexts/user.context'

const WithUserContext: () => (ChildrenComponent: FC) => FunctionComponent = () => (ChildrenComponent: FC) => {
  const UserContext: FC = (props) => {
    return (
        <UserContextProvider>
          <ChildrenComponent {...props} />
        </UserContextProvider>
    )
  }

  return UserContext
}

export default WithUserContext
