// export interface Model {
//   toJSON: Record<string, unknown>
//   toId(): string
// }

import {Model} from '../../ddd/model'

export type FirestoreRepoCreateFactory<T extends Model> = (payload: any) => T

export interface FirestoreRepoOptions<T extends Model> {
  collectionName: string
  createFactory: FirestoreRepoCreateFactory<T>
}
