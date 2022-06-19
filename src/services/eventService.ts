import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import { CollectionsEnum } from "../enums/collections";
import { db } from "../firebase";
import { DbEvent } from "../types/IEvents";


export class EventService {
  private db = db;
  private eventsCollectionRef = collection(this.db, CollectionsEnum.events);

  public events: Array<DbEvent> = [];

  private async getFirestoreEvents(): Promise<DbEvent[]> {
    const eventsQuery = query(this.eventsCollectionRef, orderBy('name', 'asc'));
    const eventsSnapshot = await getDocs(eventsQuery);

    const proffessors = eventsSnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    return proffessors as DbEvent[];
  }

  public async getEvents(storaged?: boolean): Promise<DbEvent[]> {
    // lógica para não buscar os professores no 
    // firebase toda vez que a página for carregada
    if (this.events.length > 0 && !storaged) {
      return this.events;
    }

    const events = await this.getFirestoreEvents();

    this.events = events as DbEvent[];
    return this.events;
  }

  public async getEventById(id: string): Promise<DbEvent | undefined> {
    const events = await this.getEvents();
    return events.find(event => event.id === id);
  }

  async createEvent(event: Omit<DbEvent, 'id'>): Promise<void> {
    await addDoc(this.eventsCollectionRef, event);
  }

  async updateEvent(event: DbEvent): Promise<void> {
    if (event && event.id) {
      const docRef = doc(db, CollectionsEnum.events, event.id);
      const response = await updateDoc(docRef, {...event});

      console.log('atualizei', response);
    }
  }

  async deleteEvent(id: string): Promise<void> {
    const docRef = doc(db, CollectionsEnum.events, id)
    await deleteDoc(docRef);
  }
}