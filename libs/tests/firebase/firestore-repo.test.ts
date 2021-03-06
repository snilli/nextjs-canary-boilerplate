import {FirestoreRepo} from '../../src/firebase/firestore-repo'
import {FirebaseApp} from '../../src/firebase/firebase'
import {container} from 'tsyringe'
import {Entity} from '../../src/ddd/entity'
import {nanoid} from 'nanoid'

describe('firebase repo', () => {
  interface IA {
    id: string
    name: string
    lastName: string
  }

  class A extends Entity {
    static create(option: {
      name: string
      lastName: string
    }) {
      return new A(option)
    }

    state: IA

    constructor(option: {
      id?: string
      name: string
      lastName: string
    }) {
      super({
        id: option.id as string,
      })

      this.state = {
        id: option.id ?? nanoid(20),
        name: option.name,
        lastName: option.lastName,
      }

      return this
    }

    updateName(name: string): void {
      this.state.name = name
    }
  }

  const fb = container.resolve(FirebaseApp)
  const fs = new FirestoreRepo(
      {
        collectionName: 'test',
        createFactory: payload => new A(payload),
      },
      fb,
  )

  afterAll(() => {
    fs.disconnect()
  })

  test('connect success', async () => {

    const data = new A({
      name: 'qwewqewqe',
      lastName: 'asdwdwqwqasdsad',
    })

    await fs.setDoc(data)
    let doc = await fs.getDocData(data.getId())
    expect(doc).toStrictEqual(data)

    data.updateName('popopo')
    await fs.updateDoc(data)
    doc = await fs.getDocData(data.getId())
    expect(doc).toStrictEqual(data)

    let col = await fs.getCollectionData()
    expect(col).toStrictEqual(new Map([[data.getId(), data]]))

    await fs.deleteDoc(data.getId())
    doc = await fs.getDocData(data.getId())
    expect(doc).toBeUndefined()

    col = await fs.getCollectionData()
    expect(col).toBeUndefined()
  })
})
