export type TimeCouseType = 'Matutino' | 'Vespertino' | 'Noturno' | 'Matutino/Noturno';

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

export interface SkillsProps {
  title: string;
  itens: string[];
}

export interface CourseInfoProps {
  professionalProfile: string;
  whereToWork?: string;
  technologicalAxis?: string;
  skills?: SkillsProps;
}

export interface CourseTechnicalDetailsProps {
  duration: number;
  timeCourse: TimeCouseType;
  vacancies: number;
  note?: string;
  PedagogicalProjectLink?: string;
}

export interface CurriculumProps {
  semester1: DbSubject[];
  semester2: DbSubject[];
  semester3: DbSubject[];
  semester4: DbSubject[];
  semester5: DbSubject[];
  semester6: DbSubject[];
}

export type DbCurso = {
  id: string;
  name: string;
  link: string;
  info: CourseInfoProps;
  coordinatorId: string;
  technicalDetails: CourseTechnicalDetailsProps;
  curriculum: CurriculumProps;
}
