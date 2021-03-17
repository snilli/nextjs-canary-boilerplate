import { injectable } from 'tsyringe'

@injectable()
class FirebaseAuth {
  constructor(
    private firebase: firebase
  ) {}
}
