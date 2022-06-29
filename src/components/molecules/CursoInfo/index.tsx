import React, { useLayoutEffect } from 'react';
import { CourseInfoProps } from '../../../types/ICurso';
import { Card } from '../../atoms/Card';
import { LabelText } from '../../atoms/Typography/LabelText';
import './styles.css';

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

  const handleBreaks = () => {
    const proffessionalProfileContent = document.getElementById("proffessional-prifile-content");
    const whereToWorkContent = document.getElementById("where-to-work-content");
    const technologicalAxisContent = document.getElementById("technological-axis-content");

    if (proffessionalProfileContent) {
      proffessionalProfileContent.innerHTML = professionalProfile.replace(/\n/g, "<br />") || '';
    }

    if (whereToWorkContent && whereToWork) {
      whereToWorkContent.innerHTML = whereToWork.replace(/\n/g, "<br />") || '';
    }

    if (technologicalAxisContent && technologicalAxis) {
      technologicalAxisContent.innerHTML = technologicalAxis.replace(/\n/g, "<br />") || '';
    }
  };

  useLayoutEffect(handleBreaks, [data]);

  return (
    <Card>
      <div className="sobre-curso__info">
        {professionalProfile && (
          <div>
            <LabelText
              bold
              size="default"
              spacing={{ marginBottom: 8 }}
            >
              Perfil Profissional
            </LabelText>
            <span id="proffessional-prifile-content">{professionalProfile}</span>
          </div>
        )}
        {whereToWork && (
          <div>
            <LabelText
              bold
              size="default"
              spacing={{ marginBottom: 8, marginTop: '1rem' }}
              color="primary"
            >
              Onde trabalhar?
            </LabelText>
            <span id="where-to-work-content">{whereToWork}</span>
          </div>
        )}
        {technologicalAxis && (
          <div>
            <LabelText
              bold
              size="default"
              spacing={{ marginBottom: 8, marginTop: '1rem' }}
              color="primary"
            >
              Eixo tecnológico
            </LabelText>
            <span id="technological-axis-content">{technologicalAxis}</span>
          </div>
        )}
        {skills && (
          <div>
            <LabelText
              bold
              size="default"
              spacing={{ marginBottom: 8 }}
            >
              Competências
            </LabelText>
            <span>{skills.title}</span>
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