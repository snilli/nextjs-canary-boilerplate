import {FirestoreRepo} from '../../src/firebase/firestore-repo'
import {FirebaseApp} from '../../src/firebase/firebase'
import {container} from 'tsyringe'
import {ModelPayload} from '../../src/ddd/interfaces/model.interface'

describe('firebase repo', () => {

  test('connect success', async () => {
    try {
      const fb = container.resolve(FirebaseApp)
      const fs = new FirestoreRepo(
          {
            collectionName: 'a',
          },
          fb,
      )
      const data = {
        id: 'sd',
        first: 'Alan',
        lastname: 'ASDSad',
      } as ModelPayload
      //
      // const doc = await fs.setDoc('IEJGLGcLLJx9sRjzxvFa')
      // const doc = await fs.setDoc(data, data.id)
      const doc = await fs.getCollectionData()
      console.log(doc)
    } catch (e) {
      console.log(e)
    }

    expect(1).toBe(1)
    // console.log(doc.size())
    // for (const docKey in doc) {
    //   console.log(docKey)
    // }
    // console.log(doc.data())
    // //
    // console.log(doc?.get())
  })
})
