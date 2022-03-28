import { collection, getDocs } from "firebase/firestore";
import { CollectionsEnum } from "../enums/collections";
import { db } from "../firebase";
import { DbProffessor } from "../types/IProfessor";


export class ProffessorsService {
  private db = db;
  private proffessorsCollectionRef = collection(this.db, CollectionsEnum.proffessors);

  public proffessors: DbProffessor[] = [];

  public async getProffessors(): Promise<DbProffessor[]> {
    // lógica para não buscar os professores no 
    // firebase toda vez que a página for carregada
    if (this.proffessors.length > 0) {
      return this.proffessors;
    }

    const proffesorsSnapshot = await getDocs(this.proffessorsCollectionRef);
    console.log('busquei')

    const proffesors = proffesorsSnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    this.proffessors = proffesors as DbProffessor[];
    return this.proffessors;
  }

  async createProffessor(proffessor: DbProffessor): Promise<void> {
    // TODO
  }
}