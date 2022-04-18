import { CursosEnum } from "../enums/cursos";

export type TipoDisciplina = 'tecnica' | 'infra' | 'matematica' | 'adm' | 'linguagemEstrangeira' | 'linguaPortuguesa' | 'eletiva' | 'multidisciplinarProfissional' | 'multidisciplinarBasica';
export type TipoPeriodo = 'Matutino' | 'Vespertino' | 'Noturno' | 'Matutino/Noturno';

export interface Disciplina {
  nome: string;
  categoria: string;
  cargaHoraria?: number;
}

export type SemestreProps = {
  semestre: DisciplinaProps[]
}

export interface CoordenadorCursoProps {
  linkPhoto?: string;
  nome: string;
  titulo: string;
  linkCurriculo: string;
}

export interface CompotenciasProps {
  title: string;
  itens: string[];
}

export interface CursoInfoProps {
  perfilProfissional: string;
  ondeTrabalhar?: string;
  eixoTecnologico?: string;
  competencias?: CompotenciasProps;
}

export interface CursoDetalhesTecnicosProps {
  duracao: number;
  periodo: TipoPeriodo;
  vagas: number;
  nota?: string;
  linkProjetoPedagogico?: string;
}

export type CursoProps = {
  nome: string;
  link: CursosEnum;
  info: CursoInfoProps;
  coordenador: CoordenadorCursoProps;
  detalhesTecnicos: CursoDetalhesTecnicosProps;
  grade: GradeProps;
}


export interface GradeProps {
  semestre1: DisciplinaProps[];
  semestre2: DisciplinaProps[];
  semestre3: DisciplinaProps[];
  semestre4: DisciplinaProps[];
  semestre5: DisciplinaProps[];
  semestre6: DisciplinaProps[];
}

export interface DisciplinaProps {
  title: string;
  aulasSemanais: number;
  type: TipoDisciplina;
}

type TipodDisciplinaType = {
  tecnica: TipoDisciplina;
  infra: TipoDisciplina;
  matematica: TipoDisciplina;
  adm: TipoDisciplina;
  linguagemEstrangeira: TipoDisciplina;
  linguaPortuguesa: TipoDisciplina;
  eletiva: TipoDisciplina;
  multidisciplinarProfissional: TipoDisciplina;
  multidisciplinarBasica: TipoDisciplina;
}

export const TIPO_DISCIPLINA: TipodDisciplinaType = {
  tecnica: 'tecnica',
  infra: 'infra',
  matematica: 'matematica',
  adm: 'adm',
  linguagemEstrangeira: 'linguagemEstrangeira',
  linguaPortuguesa: 'linguaPortuguesa',
  eletiva: 'eletiva',
  multidisciplinarProfissional: 'multidisciplinarProfissional',
  multidisciplinarBasica: 'multidisciplinarBasica'
}

export interface SubjectTheme {
  background: string;
  color: string;
}

export interface DbSubject {
  id: string;
  name: string;
  weeklyClasses: number;
  theme: SubjectTheme;
}