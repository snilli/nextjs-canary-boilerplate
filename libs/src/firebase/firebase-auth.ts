import {FirebaseApp} from './firebase'
import {UserInfo} from './interfaces/firebase-auth.interface'
import {injectable} from 'tsyringe'
import {Unsubscribe, User, UserCredential} from './interfaces/firebase.interface'

@injectable()
export class FirebaseAuth {
  constructor(
      private firebase: FirebaseApp,
  ) {
    this.signOut.bind(this)
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
      photoURL: user.photoURL ?? undefined,
      providerId: user.providerId,
      uid: user.uid,
    }
  }

  async signinWithEmail(email: string, password: string): Promise<UserInfo> {
    await this.setPersistence()
    const userCredential = await this
        .firebase
        .appAuth
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
        .appAuth
        .signInWithPopup(new this.firebase.auth.GoogleAuthProvider())

    const user = FirebaseAuth.getUserInfo(userCredential)
    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  async signOut(): Promise<void> {
    await this.firebase.appAuth.signOut()
  }

  async getToken(): Promise<string | undefined> {
    const currentUser = this.firebase.appAuth.currentUser
    if (!currentUser) {
      return undefined
    }

    return await currentUser.getIdToken(true)
  }

  getUser(): User | undefined {
    const currentUser = this.firebase.appAuth.currentUser
    if (!currentUser) {
      return undefined
    }

    return currentUser
  }

  onAuthStateChanged(callback: (use: User | null) => void): Unsubscribe {
    return this.firebase.appAuth.onAuthStateChanged(callback)
  }

  private async setPersistence(): Promise<void> {
    await this.firebase.auth().setPersistence(this.firebase.auth.Auth.Persistence.LOCAL)
  }
}
