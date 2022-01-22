export interface Disciplina {
  nome: string;
  categoria: string;
  cargaHoraria?: number;
}

export type SemestreProps = {
  semestre: DisciplinaProps[]
}

export interface CoordenadorCursoProps {
  linkPhoto: string;
  nome: string;
  titulo: string;
  linkCurriculo: string;
}

export type CursoProps = {
  grade: SemestreProps[];
  coordenador: CoordenadorCursoProps; 
}

export type TipoDisciplina = 'tecnica' | 'infra' | 'matematica' | 'adm' | 'linguagemEstrangeira' | 'linguaPortuguesa' | 'eletiva' | 'multidisciplinarProfissional' | 'multidisciplinarBasica';

export interface DisciplinaProps {
  title: string;
  aulasSemanais: number;
  type: TipoDisciplina;
}