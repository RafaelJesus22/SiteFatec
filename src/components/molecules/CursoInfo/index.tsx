import React from 'react';
import { CursoInfoProps } from '../../../types/ICurso';
import { Card } from '../../atoms/Card';
import { LabelText } from '../../atoms/Typography/LabelText';

interface Props {
  data: CursoInfoProps;
}

export const CursoInfo: React.FC<Props> = ({
  data,
}) => {
  const {
    perfilProfissional,
    competencias,
    eixoTecnologico,
    ondeTrabalhar,
  } = data;

  console.log(data)

  return (
    <Card>
      <div className="sobre-curso__info">
        {perfilProfissional && (
          <div>
            <LabelText
              bold
              size='small'
              spacing={{ marginBottom: 8 }}
            >
              Perfil Profissional
            </LabelText>
            <p>{perfilProfissional}</p>
          </div>
        )}
        {ondeTrabalhar && (
          <div>
            <LabelText
              bold
              size='small'
              spacing={{ marginBottom: 8 }}
            >
              Onde trabalhar?
            </LabelText>
            <p>{ondeTrabalhar}</p>
          </div>
        )}
        {eixoTecnologico && (
          <div>
            <LabelText
              bold
              size='small'
              spacing={{ marginBottom: 8 }}
            >
              Eixo tecnológico
            </LabelText>
            <p>{eixoTecnologico}</p>
          </div>
        )}
        {competencias && (
          <div>
            <LabelText
              bold
              size='small'
              spacing={{ marginBottom: 8 }}
            >
              Competências
            </LabelText>
            <p>{competencias.title}</p>
            <ul style={{ marginLeft: 16 }}>
              {competencias.itens.map((item, index) => (
                <li key={index} style={{ marginBottom: 8 }} >{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
}