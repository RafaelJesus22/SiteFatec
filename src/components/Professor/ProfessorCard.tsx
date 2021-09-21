import React from 'react';
import {
  ProfessorCard as Props,
  ProfessorMateria,
} from '../../types/IProfessor';
import { DetralhesProfessor } from './DetalhesProfessor';
import './styles.css';

export const ProfessorCard = (props: Props): JSX.Element => {
  const [selected, setSelected] = React.useState(false);

  const toggleSelected = (): void => {
    setSelected(!selected);
  };

  const { imgUrl, name, CursoDisciplinas } = props;
  return (
    <div className="professor-card">
      <div className="professor-card__header">
        <div className="data">
          <img src={imgUrl} alt={name} />
          <h2 className="professor-card__nome">{name}</h2>
        </div>
        <div className="actions">
          <p className="professor-card__info" onClick={toggleSelected}>
            {selected ? 'Ver menos' : 'Ver mais'}
          </p>
          <button className="professor-card__buton">Ver currículo</button>
        </div>
      </div>
      <div className="cursos" style={{ height: selected ? 180 : 0 }}>
        {selected &&
          CursoDisciplinas &&
          CursoDisciplinas.map((curso: ProfessorMateria, index: number) => (
            <DetralhesProfessor key={index} {...curso} />
          ))}
      </div>
    </div>
  );
};
