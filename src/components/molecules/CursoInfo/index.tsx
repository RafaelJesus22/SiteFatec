import React from 'react';
import { CourseInfoProps } from '../../../types/ICurso';
import { Card } from '../../atoms/Card';
import { LabelText } from '../../atoms/Typography/LabelText';

interface Props {
  data: CourseInfoProps;
}

export const CursoInfo: React.FC<Props> = ({
  data,
}) => {
  const {
    professionalProfile,
    skills,
    technologicalAxis,
    whereToWork
  } = data;

  console.log(data)

  return (
    <Card>
      <div className="sobre-curso__info">
        {professionalProfile && (
          <div>
            <LabelText
              bold
              size='small'
              spacing={{ marginBottom: 8 }}
            >
              Perfil Profissional
            </LabelText>
            <p>{professionalProfile}</p>
          </div>
        )}
        {whereToWork && (
          <div>
            <LabelText
              bold
              size='small'
              spacing={{ marginBottom: 8 }}
            >
              Onde trabalhar?
            </LabelText>
            <p>{whereToWork}</p>
          </div>
        )}
        {technologicalAxis && (
          <div>
            <LabelText
              bold
              size='small'
              spacing={{ marginBottom: 8 }}
            >
              Eixo tecnológico
            </LabelText>
            <p>{technologicalAxis}</p>
          </div>
        )}
        {skills && (
          <div>
            <LabelText
              bold
              size='small'
              spacing={{ marginBottom: 8 }}
            >
              Competências
            </LabelText>
            <p>{skills.title}</p>
            <ul style={{ marginLeft: 16 }}>
              {skills.itens.map((item, index) => (
                <li key={index} style={{ marginBottom: 8 }} >{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
}