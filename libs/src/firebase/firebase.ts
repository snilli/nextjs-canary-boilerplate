import 'firebase/auth' // If you need it
import 'firebase/firestore'
import firebase from 'firebase'
import {injectable} from 'tsyringe'

@injectable()
export class FirebaseApp {
  private firebaseApp: firebase.app.App

  constructor() {
    if (!firebase.apps.length) {
      this.firebaseApp = firebase.initializeApp({
        apiKey: 'AIzaSyDv9ApyLvIaoGtyA-G2hoipFyEtAzfZ5mo',
        authDomain: 'random-anything.firebaseapp.com',
        databaseURL: 'https://random-anything.firebaseio.com',
        projectId: 'random-anything',
        storageBucket: 'random-anything.appspot.com',
        messagingSenderId: '729964389763',
        appId: '1:729964389763:web:6118b930932c9c4ced42b6',
      })
      // this.firebaseApp = firebase.initializeApp({
      //   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      //   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      //   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      //   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      //   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      //   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      //   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      // })
    } else {
      this.firebaseApp = firebase.app()
    }

  }

  auth(): firebase.auth.Auth {
    return this.firebaseApp.auth()
  }

  firestore(): firebase.firestore.Firestore {
    return this.firebaseApp.firestore()
  }
}
