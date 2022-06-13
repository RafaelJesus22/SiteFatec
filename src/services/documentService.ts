import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import { ref, list, StorageReference, getDownloadURL } from 'firebase/storage';
import { CollectionsEnum } from "../enums/collections";
import { db, storage } from "../firebase";
import { DbDocument, DbDirectoryPath, StorageFile } from "../types/IDocument";


export class DocumentService {
  private db = db;
  private documentsCollectionRef = collection(this.db, CollectionsEnum.documents);
  private storage = storage;

  public documents: DbDocument[] = [];
  public directories: DbDirectoryPath[] = [];

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

  private async getFirestoreDirectories(): Promise<DbDirectoryPath[]> {
    const directoriesQuery = query(this.documentsCollectionRef, orderBy('name', 'asc'));
    const directoriesSnapshot = await getDocs(directoriesQuery);

    const directories = directoriesSnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    return directories as DbDirectoryPath[]; 
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

  public async getDirectories(storaged?: boolean): Promise<DbDirectoryPath[]> {
    // lógica para não buscar os professores no 
    // firebase toda vez que a página for carregada
    if (this.directories.length > 0 && !storaged) {
      return this.directories;
    }

    const directories = await this.getFirestoreDirectories();

    this.directories = directories as DbDirectoryPath[];
    return this.directories;
  }

  public async getDocumentById(id: string): Promise<DbDocument | undefined> {
    const documents = await this.getDocuments();
    return documents.find(document => document.id === id);
  }

  async createDocument(document: DbDocument): Promise<void> {
    const response = await addDoc(this.documentsCollectionRef, document);
    console.log('criei', response);
  }

  public async getFilesByPath(path: string): Promise<StorageFile[]> {
    if (path === '') {
      return [];
    }

    const directoryRef = ref(this.storage, path);
    const files = await list(directoryRef);

    return files.items.map((file) => {
      return {
        name: file.name,
        file,
      };
    });
  }
}