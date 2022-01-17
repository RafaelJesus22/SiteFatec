export interface Disciplina {
  nome: string;
  categoria: string;
  cargaHoraria?: number;
}

export type SemestreProps = {
  semestre: DisciplinaProps[]
}

export type CursoProps = {
  semestres: SemestreProps[]
}

export type TipoDisciplina = 'tecnica' | 'infra' | 'matematica' | 'adm' | 'linguagemEstrangeira' | 'linguaPortuguesa' | 'eletiva' | 'multidisciplinarProfissional' | 'multidisciplinarBasica';

export interface DisciplinaProps {
  title: string;
  aulasSemanais: number;
  type: TipoDisciplina;
  size?: number;
}