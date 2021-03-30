import {FirebaseApp} from './firebase'
import {UserInfo} from './interfaces/firebase-auth.interface'
import firebase from 'firebase'
import {injectable} from 'tsyringe'

export type User = firebase.User
type UserCredential = firebase.auth.UserCredential

@injectable()
export class FirebaseAuth {
  constructor(
      private firebase: FirebaseApp,
  ) {
  }

  private static getUserInfo(userCredential: UserCredential): UserInfo | undefined {
    const user = userCredential.user

    if (!user) {
      return
    }

    return {
      displayName: user.displayName ?? undefined,
      email: user.email ?? undefined,
      phoneNumber: user.phoneNumber ?? undefined,
      photoURL: user.providerId,
      providerId: user.providerId,
      uid: user.uid,
    }
  }

  async signinWithEmail(email: string, password: string): Promise<UserInfo> {
    await this.setPersistence()
    const userCredential = await this
        .firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

    const user = FirebaseAuth.getUserInfo(userCredential)
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

    const user = FirebaseAuth.getUserInfo(userCredential)
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

    return await currentUser.getIdToken(true)
  }

  getUser(): User | undefined {
    const currentUser = this.firebase.auth().currentUser
    if (!currentUser) {
      return undefined
    }

    return currentUser
  }

  private async setPersistence(): Promise<void> {
    await this.firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  }
}
