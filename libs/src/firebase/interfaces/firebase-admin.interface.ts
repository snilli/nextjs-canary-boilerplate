import { firestore } from 'firebase-admin/lib/firestore'
import { auth } from 'firebase-admin/lib/auth'
import Firestore = firestore.Firestore
import Auth = auth.Auth

export interface FirebaseAdminInterface {
  firestore(): Firestore
  auth(): Auth
}
