import {FirebaseApp} from './firebase'
import {UserInfo} from './interfaces/auth.interface'
import firebase from 'firebase'
import UserCredential = firebase.auth.UserCredential

export class FirebaseAuth {
  constructor(
      private firebase: FirebaseApp,
  ) {
  }

  private static async getUser(userCredential: UserCredential): Promise<UserInfo | undefined> {
    const user = userCredential.user

    if (!user) {
      return
    }

    const decodeToken = await user.getIdTokenResult()

    return {
      displayName: user.displayName ?? undefined,
      email: user.email ?? undefined,
      phoneNumber: user.phoneNumber ?? undefined,
      photoURL: user.providerId,
      providerId: user.providerId,
      uid: user.uid,
      token: {
        token: decodeToken.token,
        expirationTime: decodeToken.expirationTime,
        authTime: decodeToken.authTime,
        issuedAtTime: decodeToken.issuedAtTime,
        signInProvider: decodeToken.signInProvider ?? undefined,
        signInSecondFactor: decodeToken.signInSecondFactor ?? undefined,
        claims: decodeToken.claims,
      },
    }
  }

  async signinWithEmail(email: string, password: string): Promise<UserInfo> {
    await this.setPersistence()
    const userCredential = await this
        .firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

    const user = await FirebaseAuth.getUser(userCredential)
    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  async signinWithGoogle(): Promise<UserInfo> {
    await this.setPersistence()
    const userCredential = await this
        .firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())

    const user = await FirebaseAuth.getUser(userCredential)
    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  async signOut(): Promise<void> {
    await this.firebase.auth().signOut()
  }

  async getToken(): Promise<string | undefined> {
    const currentUser = this.firebase.auth().currentUser
    if (!currentUser) {
      return undefined

    }

    return await currentUser.getIdToken()
  }

  private async setPersistence(): Promise<void> {
    await this.firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  }
}
