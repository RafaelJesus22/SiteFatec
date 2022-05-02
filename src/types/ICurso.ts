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
  pedagogicalProjectUrl?: string;
}

export interface CurriculumProps {
  semester1: string[];
  semester2: string[];
  semester3: string[];
  semester4: string[];
  semester5: string[];
  semester6: string[];
}

export type DbCurso = {
  id: string;
  name: string;
  link: string;
  imageUrl: string;
  info: CourseInfoProps;
  coordinatorId: string;
  technicalDetails: CourseTechnicalDetailsProps;
  curriculum: CurriculumProps;
}
