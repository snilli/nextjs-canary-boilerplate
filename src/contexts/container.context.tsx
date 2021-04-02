import {createContext, ReactNode, useContext} from 'react'
import {container, DependencyContainer, InjectionToken} from 'tsyringe'
import {FirebaseApp} from '../../libs/src/firebase/firebase'

export interface ContainerContextProps {
  children: ReactNode
}

container.register<FirebaseApp>(FirebaseApp, {
  useValue: new FirebaseApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  }),
})

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
  return useContext(ContainerContext).resolve(token)
}
