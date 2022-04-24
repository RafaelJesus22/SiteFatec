import React from 'react';
import { DbProffessor } from '../../types/IProfessor';
import { DbSubject } from '../../types/ICurso';

export const DetralhesProfessor: React.FC<DbProffessor> = ({
  name,
  classes
}): JSX.Element => {
  return (
    <div key={name} className={'detalhe'}>
      <div>
        <h4 className="detalhe__title">Curso:</h4>
        <p>{classes[0].value}</p>
      </div>

      {/* <div>
        <h4 className="detalhe__title">Função:</h4>
        <p>{funcao}</p>
      </div>

      <div>
        <h4 className="detalhe__title">Disciplinas</h4>
        <div className="disciplina__container">
          {disciplinas.map((disciplina: DbSubject) => (
            <p key={disciplina.name} className="disciplina">
              {disciplina.name}
            </p>
          ))}
        </div> */}
      {/* </div> */}
    </div>
  );
};
