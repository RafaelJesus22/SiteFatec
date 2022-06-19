import { CursoServise } from "./cursosService";
import { ProffessorsService } from "./professoresService";
import { SubjectService } from "./subjectService";
import { DocumentService } from "./documentService";
import { EventService } from "./eventService";

const cursosService = new CursoServise();
const proffessorsService = new ProffessorsService();
const subjectService = new SubjectService();
const documentService = new DocumentService();
const eventService = new EventService();

export {
  cursosService,
  proffessorsService,
  subjectService,
  documentService,
  eventService,
};