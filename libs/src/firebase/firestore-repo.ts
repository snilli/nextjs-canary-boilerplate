import {injectable} from 'tsyringe'
import {FirebaseApp} from './firebase'
import {FirestoreRepoCreateFactory, FirestoreRepoOptions} from './interfaces/firestore-repo.interface'
import firebase from 'firebase'
import {Model} from '../ddd/model'

@injectable()
export class FirestoreRepo<T extends Model> {
  protected createFactory: FirestoreRepoCreateFactory<T>
  protected collectionName: string

  constructor(
      option: FirestoreRepoOptions<T>,
      private firebase: FirebaseApp,
  ) {
    this.createFactory = option.createFactory
    this.collectionName = option.collectionName
  }

  async setDoc(document: T): Promise<void> {
    const id = document.getId()
    const collection = await this.getCollectionRef()

    const data = document.toJSON() as unknown as T

    await collection.doc(id).set(data)
  }

  async updateDoc(document: T): Promise<void> {
    const id = document.getId()
    const docRef = await this.getDocRef(id)

    if (!docRef) {
      return
    }

    await docRef.update(document.toJSON())
  }

  async deleteDoc(id: string): Promise<void> {
    const docRef = await this.getDocRef(id)

    if (!docRef) {
      return
    }

    await docRef.delete()
  }

  getCollectionRef(): firebase.firestore.CollectionReference<any> {
    return this
        .firebase
        .firestore()
        .collection(this.collectionName) as firebase.firestore.CollectionReference<any>
  }

  async getDocRef(id: string): Promise<firebase.firestore.DocumentReference<T> | undefined> {
    const collection = await this.getCollectionRef()
    const doc = collection.doc(id)
    if (!doc) {
      return
    }

    return doc
  }

  async getDocData(id: string): Promise<T | undefined> {
    const collection = await this.getCollectionRef()
    const doc = collection.doc(id)
    const docSnap = await doc.get()

    if (!docSnap.exists) {
      return
    }

    return this.createFactory(docSnap.data())
  }

  async getCollectionData(): Promise<Map<string, T> | undefined> {
    const collectionRef = await this.getCollectionRef()
    if (!collectionRef) {
      return
    }

    const dataMap: Map<string, T> = new Map<string, T>()
    const collection = await collectionRef.get()

    collection.forEach(doc => {
      dataMap.set(doc.id, this.createFactory(doc.data()))
    })

    if (!collection.size) {
      return
    }

    return dataMap
  }

  async disconnect(): Promise<void> {
    await this.firebase.firestore().disableNetwork()
  }
}
