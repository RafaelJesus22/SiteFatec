import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { CollectionsEnum } from "../enums/collections";
import { CursosEnum } from "../enums/cursos";
import { db } from "../firebase";
import { DbCurso } from "../types/ICurso";

export class CursoServise {
  private db = db;
  private courseCollectionRef = collection(this.db, CollectionsEnum.courses);

  public cursos: DbCurso[] = [];

  private async getFirestoreCourses(): Promise<DbCurso[]> {
    const coursesSnapshot = await getDocs(this.courseCollectionRef);

    const proffessors = coursesSnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    return proffessors as DbCurso[];
  }

  public async getCourses(storaged?: boolean): Promise<DbCurso[]> {
    console.log(storaged);

    if (this.cursos.length > 0 && !storaged) {
      return this.cursos;
    }

    const cursos = await this.getFirestoreCourses();
    this.cursos = cursos;

    return this.cursos;
  }

  public async getOneCourse(id: string): Promise<DbCurso | undefined> {
    const courses = await this.getCourses();
    return courses.find(course => course.id === id);
  }

  public async createCourse(course: DbCurso): Promise<void> {
    const response = await addDoc(this.courseCollectionRef, course);
    console.log('criei', response);
  }

  public async updateCourse(course: DbCurso): Promise<void> {
    if (course && course.id) {
      const docRef = doc(db, CollectionsEnum.courses, course.id);
      const response = await updateDoc(docRef, {...course});

      console.log('atualizei', response);
    }
  }

  public async deleteCourse(id: string): Promise<void> {
    const docRef = doc(db, CollectionsEnum.courses, id)
    await deleteDoc(docRef);
    await this.getFirestoreCourses();
  }

  public getCurso(curso: CursosEnum): DbCurso | undefined {
    return this.cursos.find(c => c.link === curso);
  }
}