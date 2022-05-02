import { CursoServise } from "./cursosService";
import { ProffessorsService } from "./professoresService";
import { SubjectService } from "./subjectService";
import { DocumentService } from "./documentService";

const cursosService = new CursoServise();
const proffessorsService = new ProffessorsService();
const subjectService = new SubjectService();
const documentService = new DocumentService();

export {
  cursosService,
  proffessorsService,
  subjectService,
  documentService,
};