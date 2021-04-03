// export interface Model {
//   toJSON: Record<string, unknown>
//   toId(): string
// }

import {Entity} from '../../ddd/entity'
import {FirebaseApp} from '../firebase'

export type FirestoreRepoCreateFactory<T extends Entity> = (payload: any) => T

export interface FirestoreRepoOptions<T extends Entity> {
  collectionName: string
  createFactory: FirestoreRepoCreateFactory<T>
  firebaseApp: FirebaseApp
}
