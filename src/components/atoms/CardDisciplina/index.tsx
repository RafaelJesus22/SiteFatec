import { useEffect, useState } from 'react';
import { subjectService } from '../../../services';
import { DbSubject } from '../../../types/ICurso';
import './styles.css';

interface Props {
  subjectId: string;
}

const LOADING_SUBJECT = {
  id: '',
  name: 'Carregando',
  theme: {
    background: '#ccc',
    color: '#fff',
  }
};

export const CardDiciplina: React.FC<Props> = ({
  subjectId
}) => {
  const [subject, setSubject] = useState<DbSubject>(
    LOADING_SUBJECT as DbSubject
  );

  useEffect(() => {
    subjectService.getOneSubject(subjectId)
      .then(res => setSubject(res as DbSubject));
  }, [subjectId])

  return (
    <div
      className="semestre-disciplina"
      style={{
        backgroundColor: subject.theme.background,
        minHeight: subject.weeklyClasses > 2 ? 150 : 75,
      }}>
      <p style={{ color: subject.theme.color }}>
        {subject.name}{'\n'}
        {!!subject.weeklyClasses && `(${subject.weeklyClasses})`}
      </p>
    </div>
  )
}
