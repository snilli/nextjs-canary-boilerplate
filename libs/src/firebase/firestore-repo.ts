import 'reflect-metadata'
import {injectable} from 'tsyringe'
import {FirebaseApp} from './firebase'
import {FirestoreRepoOptions} from './interfaces/firestore-repo.interface'
import firebase from 'firebase'
import {ModelPayload} from '../ddd/interfaces/model.interface'
import {Model} from '../ddd/model'

@injectable()
export class FirestoreRepo<T extends ModelPayload> {
  // protected createFactory: FirestoreRepoCreateFactory<T>
  protected collectionName: string

  constructor(
      option: FirestoreRepoOptions,
      private firebase: FirebaseApp,
  ) {
    // this.createFactory = option.createFactory
    this.collectionName = option.collectionName
  }

  async setDoc(document: Model<T>): Promise<void> {
    const id = document.getId()
    const collection = await this.getCollectionRef()

    await collection.doc(id).set(document.toJSON())
  }

  async updateDoc(document: Model<T>): Promise<void> {
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

  getCollectionRef(): firebase.firestore.CollectionReference<T> {
    return this
        .firebase
        .firestore()
        .collection(this.collectionName) as firebase.firestore.CollectionReference<T>
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

    return docSnap.data()
  }

  async getCollectionData(): Promise<Map<string, T> | undefined> {
    const collectionRef = await this.getCollectionRef()
    if (!collectionRef) {
      return
    }

    const dataMap: Map<string, T> = new Map<string, T>()
    const collection = await collectionRef.get()
    collection.forEach(doc => {
      dataMap.set(doc.id, doc.data())
    })

    return dataMap
  }
}
