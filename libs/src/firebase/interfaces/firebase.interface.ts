import firebase from 'firebase/app'

export type User = firebase.User
export type UserCredential = firebase.auth.UserCredential
export type Auth = firebase.auth.Auth
export type CollectionReference<T> = firebase.firestore.CollectionReference<T>
export type DocumentReference<T> = firebase.firestore.DocumentReference<T>
export type Unsubscribe = firebase.Unsubscribe

export interface Config {
  apiKey?: string
  authDomain?: string
  databaseURL?: string
  projectId?: string
  storageBucket?: string
  messagingSenderId?: string
  appId?: string
}
