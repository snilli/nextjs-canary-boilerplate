import firebase from 'firebase'
import Auth = firebase.auth.Auth
import Firestore = firebase.firestore.Firestore

export interface FirebaseInterface {
  firestore(): Firestore
  auth(): Auth
}
