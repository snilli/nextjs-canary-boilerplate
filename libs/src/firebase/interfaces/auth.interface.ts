export interface UserInfo {
  displayName?: string
  email?: string
  phoneNumber?: string
  photoURL?: string
  providerId: string
  uid: string
  token: UserInfoToken
}

export interface UserInfoToken {
  token: string
  expirationTime: string
  authTime: string
  issuedAtTime: string
  signInProvider?: string
  signInSecondFactor?: string
  claims: {
    [key: string]: any
  }
}
