import React from 'react';
import { ProfessorMateria } from '../../types/IProfessor';
import { Disciplina } from '../../types/ICurso';

export const DetralhesProfessor = (props: ProfessorMateria): JSX.Element => {
  const { curso, disciplinas, funcao } = props;
  return (
    <div key={curso} className={'detalhe'}>
      <div>
        <h4 className="detalhe__title">Curso:</h4>
        <p>{curso}</p>
      </div>

      <div>
        <h4 className="detalhe__title">Função:</h4>
        <p>{funcao}</p>
      </div>

      <div>
        <h4 className="detalhe__title">Disciplinas</h4>
        <div className="disciplina__container">
          {disciplinas.map((disciplina: Disciplina) => (
            <p key={disciplina.nome} className="disciplina">
              {disciplina.nome}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
