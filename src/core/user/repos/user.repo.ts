import {FirestoreRepo} from '../../../../libs/src/firebase/firestore-repo'
import {UserEntity, UserEntityState} from '../entity/user.entity'
import {FirebaseApp} from '../../../../libs/src/firebase/firebase'
import {injectable} from 'tsyringe'

@injectable()
export class UserRepo extends FirestoreRepo<UserEntity> {
  constructor(
      firebaseApp: FirebaseApp,
  ) {
    super({
      collectionName: 'user',
      createFactory: UserRepo.createFactory,
      firebaseApp: firebaseApp,
    })
  }

  private static createFactory(payload: UserEntityState): UserEntity {
    return new UserEntity(payload)
  }
}
