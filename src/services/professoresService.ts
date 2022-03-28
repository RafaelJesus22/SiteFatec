import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { CollectionsEnum } from "../enums/collections";
import { db } from "../firebase";
import { DbProffessor } from "../types/IProfessor";


export class ProffessorsService {
  private db = db;
  private proffessorsCollectionRef = collection(this.db, CollectionsEnum.proffessors);

  public proffessors: DbProffessor[] = [];

  private async getFirestoreProffessors(): Promise<DbProffessor[]> {
    const proffesorsSnapshot = await getDocs(this.proffessorsCollectionRef);

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

  public async getOneProfessor(id: string): Promise<DbProffessor | undefined> {
    const proffessors = await this.getProffessors();
    return proffessors.find(proffessor => proffessor.id === id);
  }

  async createProffessor(proffessor: DbProffessor): Promise<void> {
    const response = await addDoc(this.proffessorsCollectionRef, proffessor);
    console.log('criei', response);
  }

  async updateProffessor(proffessor: DbProffessor): Promise<void> {
    if (proffessor && proffessor.id) {
      const docRef = doc(db, "proffessors", proffessor.id);
      const response = await updateDoc(docRef, {...proffessor});

      console.log('atualizei', response);
    }
  }
}