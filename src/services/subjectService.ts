import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import { CollectionsEnum } from "../enums/collections";
import { db } from "../firebase";
import { DbSubject } from "../types/ICurso";


export class SubjectService {
  private db = db;
  private subjectsCollectionRef = collection(this.db, CollectionsEnum.disciplines);

  public subjects: DbSubject[] = [];

  private async getFirestoreSubjects(): Promise<DbSubject[]> {
    const subjectsQuery = query(this.subjectsCollectionRef, orderBy('name', 'asc'));
    const subjectsSnapshot = await getDocs(subjectsQuery);

    const subjects = subjectsSnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    return subjects as DbSubject[];
  }

  public async getSubjects(storaged?: boolean): Promise<DbSubject[]> {
    // lógica para não buscar os professores no 
    // firebase toda vez que a página for carregada
    if (this.subjects.length > 0 && !storaged) {
      return this.subjects;
    }

    const subjects = await this.getFirestoreSubjects();

    this.subjects = subjects as DbSubject[];
    return this.subjects;
  }

  public async getOneSubject(id: string): Promise<DbSubject | undefined> {
    const subjects = await this.getSubjects();
    return subjects.find(subject => subject.id === id);
  }

  async createSubject(subject: DbSubject): Promise<void> {
    const response = await addDoc(this.subjectsCollectionRef, subject);
    console.log('criei', response);
  }

  async updateSubject(subject: DbSubject): Promise<void> {
    if (subject && subject.id) {
      const docRef = doc(db, CollectionsEnum.disciplines, subject.id);
      const response = await updateDoc(docRef, {...subject});

      console.log('atualizei', response);
    }
  }

  async deleteSubject(id: string): Promise<void> {
    const docRef = doc(db, CollectionsEnum.disciplines, id)
    await deleteDoc(docRef);
    console.log('deletei');
  }
}