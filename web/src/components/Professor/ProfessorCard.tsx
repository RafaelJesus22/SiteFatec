import React from 'react';
import './styles.css';

interface ProfessorCardProps {
  imgUrl: string;
  name: string;
  selected: boolean;
}

export const ProfessorCard = (props: ProfessorCardProps): JSX.Element => { 
  const { imgUrl, name, selected } = props;
  return (
    <div className="professor-card">
      <div className="professor-card__header">
        <div className="data">
          <img src={imgUrl} alt={name} />
          <h2 className="professor-card__nome">
            {name}
          </h2>
        </div>
        <div className="actions">
          <p className="professor-card__info">
            {selected ? 'Ver menos': 'Ver mais'}
          </p>
          <button className="professor-card__buton">
            Ver currículo
          </button>
        </div>
      </div>
    </div>
  );
};
