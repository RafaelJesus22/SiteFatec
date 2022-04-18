import { CursoServise } from "./cursosService";
import { ProffessorsService } from "./professoresService";
import { SubjectService } from "./subjectService";

const cursosService = new CursoServise();
const proffessorsService = new ProffessorsService();
const subjectService = new SubjectService();

export {
  cursosService,
  proffessorsService,
  subjectService,
};