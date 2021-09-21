import { Disciplina } from './ICurso';

export interface ProfessorMateria {
  curso: string;
  funcao: string;
  disciplinas: Disciplina[];
}

export interface ProfessorCard {
  imgUrl: string;
  name: string;
  CursoDisciplinas?: ProfessorMateria[];
}
