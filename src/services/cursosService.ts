import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc, query, orderBy } from "firebase/firestore";
import { CollectionsEnum } from "../enums/collections";
import { db } from "../firebase";
import { DbCurso } from "../types/ICurso";

export class CursoServise {
  private db = db;
  private courseCollectionRef = collection(this.db, CollectionsEnum.courses);

  public cursos: DbCurso[] = [];

  private async getFirestoreCourses(): Promise<DbCurso[]> {
    try {
      const coursesQuery = query(this.courseCollectionRef, orderBy('name', 'asc'));
      const coursesSnapshot = await getDocs(coursesQuery);

      const proffessors = coursesSnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });

      return proffessors as DbCurso[];
    } catch (err) {
      window.alert('erro ao buscar cursos\n' + JSON.stringify(err));
    }

    return [];
  }

  public async getCourses(storaged?: boolean): Promise<DbCurso[]> {
    if (this.cursos.length > 0 && !storaged) {
      return this.cursos;
    }

    const cursos = await this.getFirestoreCourses();
    this.cursos = cursos;

    return this.cursos;
  }

  public async getCouseByLink(link: string): Promise<DbCurso | undefined> {
    const courses = await this.getCourses();
    return courses.find(course => course.link === link);
  }

  public async getOneCourse(id: string): Promise<DbCurso | undefined> {
    const courses = await this.getCourses();
    return courses.find(course => course.id === id);
  }

  public async createCourse(course: DbCurso): Promise<void> {
    try {
      await addDoc(this.courseCollectionRef, course);
    } catch (err) {
      window.alert('erro ao cadastrar curso:\n' + JSON.stringify(err));
    } finally {
      await this.getCourses(true);
    }
  }

  public async updateCourse(course: DbCurso): Promise<void> {
    try {
      const docRef = doc(db, CollectionsEnum.courses, course.id);
      await updateDoc(docRef, { ...course });
    } catch (err) {
      window.alert('erro ao editar curso\n' + JSON.stringify(err));
    } finally {
      await this.getCourses(true);
    }
  }

  public async deleteCourse(id: string): Promise<void> {
    try {
      const docRef = doc(db, CollectionsEnum.courses, id)
      await deleteDoc(docRef);
    } catch (err) {
      window.alert('erro ao deletar curso\n' + JSON.stringify(err));
    } finally {
      await this.getFirestoreCourses();
    }
  }
}