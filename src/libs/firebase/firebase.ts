import { singleton } from 'tsyringe'
import 'firebase/auth' // If you need it
import 'firebase/firestore'
import firebase from 'firebase'
import { ClientCredentials } from './interfaces/firebase.interface'
import App = firebase.app.App

@singleton()
export class FirebaseApp {
  static create(option: ClientCredentials): App {
    return firebase.initializeApp(option)
  }

  constructor(option: ClientCredentials) {
    return firebase.initializeApp(option)
  }
}
