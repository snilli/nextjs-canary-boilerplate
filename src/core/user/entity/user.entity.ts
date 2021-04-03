import {Entity} from '../../../../libs/src/ddd/entity'
import {UserEntityInput} from './interfaces/user.entity.interface'
import {nanoid} from 'nanoid'

export interface UserEntityState {
  displayName?: string
  email?: string
  phoneNumber?: string
  photoURL?: string
  providerId: string
  id: string
}

export class UserEntity extends Entity<UserEntityState> {
  static Create(option: UserEntityInput): UserEntity {
    return new UserEntity({
      id: option.id ?? nanoid(20),
      providerId: option.providerId,
      email: option.email,
      phoneNumber: option.phoneNumber,
      displayName: option.displayName,
      photoURL: option.photoURL,
    })
  }

  constructor(props: UserEntityState) {
    super(props)
  }
}
