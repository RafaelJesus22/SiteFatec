import { CursoServise } from "./cursosService";
import { ProffessorsService } from "./professoresService";


const cursosService = new CursoServise();
const proffessorsService = new ProffessorsService();

export {
  cursosService,
  proffessorsService,
};