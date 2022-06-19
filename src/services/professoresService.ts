import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import { CollectionsEnum } from "../enums/collections";
import { db } from "../firebase";
import { DbProffessor } from "../types/IProfessor";


export class ProffessorsService {
  private db = db;
  private proffessorsCollectionRef = collection(this.db, CollectionsEnum.proffessors);

  public proffessors: DbProffessor[] = [];

  private async getFirestoreProffessors(): Promise<DbProffessor[]> {
    const preffessorsQuery = query(this.proffessorsCollectionRef, orderBy('name', 'asc'));
    const proffesorsSnapshot = await getDocs(preffessorsQuery);

    const proffessors = proffesorsSnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    return proffessors as DbProffessor[];
  }

  public async getProffessors(storaged?: boolean): Promise<DbProffessor[]> {
    // lógica para não buscar os professores no 
    // firebase toda vez que a página for carregada
    if (this.proffessors.length > 0 && !storaged) {
      return this.proffessors;
    }

    const proffessors = await this.getFirestoreProffessors();

    this.proffessors = proffessors as DbProffessor[];
    return this.proffessors;
  }

  public async getProfessorById(id: string): Promise<DbProffessor | undefined> {
    const proffessors = await this.getProffessors();
    return proffessors.find(proffessor => proffessor.id === id);
  }

  async createProffessor(proffessor: DbProffessor): Promise<void> {
    const response = await addDoc(this.proffessorsCollectionRef, proffessor);
    console.log('criei', response);
  }

  async updateProffessor(proffessor: DbProffessor): Promise<void> {
    if (proffessor && proffessor.id) {
      const docRef = doc(db, CollectionsEnum.proffessors, proffessor.id);
      const response = await updateDoc(docRef, {...proffessor});

      console.log('atualizei', response);
    }
  }

  async deleteProffessor(id: string): Promise<void> {
    const docRef = doc(db, CollectionsEnum.proffessors, id)
    await deleteDoc(docRef);
    console.log('deletei');
  }
}