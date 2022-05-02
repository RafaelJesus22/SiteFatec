import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import { CollectionsEnum } from "../enums/collections";
import { db } from "../firebase";
import { DbDocument } from "../types/IDocument";


export class DocumentService {
  private db = db;
  private documentsCollectionRef = collection(this.db, CollectionsEnum.documents);

  public documents: DbDocument[] = [];

  private async getFirestoreDocuments(): Promise<DbDocument[]> {
    const documentsQuery = query(this.documentsCollectionRef, orderBy('name', 'asc'));
    const documentsSnapshot = await getDocs(documentsQuery);

    const documents = documentsSnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    return documents as DbDocument[];
  }

  public async getDocuments(storaged?: boolean): Promise<DbDocument[]> {
    // lógica para não buscar os professores no 
    // firebase toda vez que a página for carregada
    if (this.documents.length > 0 && !storaged) {
      return this.documents;
    }

    const documents = await this.getFirestoreDocuments();

    this.documents = documents as DbDocument[];
    return this.documents;
  }

  public async getDocumentById(id: string): Promise<DbDocument | undefined> {
    const documents = await this.getDocuments();
    return documents.find(document => document.id === id);
  }

  async createDocument(document: DbDocument): Promise<void> {
    const response = await addDoc(this.documentsCollectionRef, document);
    console.log('criei', response);
  }

  async updateDocument(document: DbDocument): Promise<void> {
    if (document && document.id) {
      const docRef = doc(db, CollectionsEnum.disciplines, document.id);
      const response = await updateDoc(docRef, {...document});

      console.log('atualizei', response);
    }
  }

  async deleteDocument(id: string): Promise<void> {
    const docRef = doc(db, CollectionsEnum.disciplines, id)
    await deleteDoc(docRef);
    console.log('deletei');
  }
}