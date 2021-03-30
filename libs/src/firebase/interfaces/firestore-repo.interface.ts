// export interface Model {
//   toJSON: Record<string, unknown>
//   toId(): string
// }

import {Entity} from '../../ddd/entity'

export type FirestoreRepoCreateFactory<T extends Entity> = (payload: any) => T

export interface FirestoreRepoOptions<T extends Entity> {
  collectionName: string
  createFactory: FirestoreRepoCreateFactory<T>
}
