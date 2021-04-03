import firebase from 'firebase/app'
import 'firebase/auth' // If you need it
import 'firebase/firestore'
import {Config} from './interfaces/firebase.interface'

export class FirebaseApp {
  firestore: firebase.firestore.Firestore
  appAuth: firebase.auth.Auth
  auth: typeof firebase.auth

  constructor(config: Config) {
    if (!firebase.apps.length) {
      const app = firebase.initializeApp({
        apiKey: config.apiKey,
        authDomain: config.authDomain,
        databaseURL: config.databaseURL,
        projectId: config.projectId,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messagingSenderId,
        appId: config.appId,
      })

      app.firestore().settings({
        ignoreUndefinedProperties: true,
      })

      this.firestore = app.firestore()
      this.appAuth = app.auth()
    } else {
      this.firestore = firebase.app().firestore()
      this.appAuth = firebase.app().auth()
    }
    this.auth = firebase.auth
  }
}
