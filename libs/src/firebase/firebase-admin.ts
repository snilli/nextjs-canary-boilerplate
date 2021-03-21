import admin from 'firebase-admin'
import {firestore} from 'firebase-admin/lib/firestore'
import {app} from 'firebase-admin/lib/firebase-namespace-api'
import {auth} from 'firebase-admin/lib/auth'
import {FirebaseAdminInterface} from './interfaces/firebase-admin.interface'
import App = app.App
import Firestore = firestore.Firestore
import Auth = auth.Auth

export class FirebaseAdminApp implements FirebaseAdminInterface {
  private admin: App

  constructor() {
    if (admin.apps.length) {
      this.admin = admin.app()
    }

    this.admin = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    })
  }

  firestore(): Firestore {
    return this.admin.firestore()
  }

  auth(): Auth {
    return this.admin.auth()
  }
}
