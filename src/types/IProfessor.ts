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


export interface DbProffessor {
  name: string;
  id?: string;
  imgUrl: string;
  email: string;
  classes: Array<{ label: string, value: string }>;
  lattes: string;
  linkedin?: string;
  github?: string;
  whatsapp?: string;
}