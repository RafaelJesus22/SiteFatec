import React from 'react';
import { useHistory } from 'react-router-dom';
import { CallToMore } from '../../atoms/CallToMore/CallToMore';
import { LabelText } from '../../atoms/Typography/LabelText';
import './styles.css';

export interface CursoCardProps {
  title: string;
  image: string;
  description: string;
  inverted?: boolean;
  link?: string;
}

export const CursoCard: React.FC<CursoCardProps> = ({
  title,
  image,
  description,
  inverted,
  link,
}) => {
  const history = useHistory();
  const handleClick = () => {
    if (!!link) {
      history.push(`cursos/${link}`);
    }
  };
  return (
    <div className="curso_card__container">
      <div className={`curso-card ${inverted ? 'inverted' : ''}`}>
        <div className="curso-card__image">
          <img
            src={image}
            alt="Curso de React"
          />
        </div>
        <div className="curso-card__content">
          <h3 className="curso-card__title" onClick={handleClick}>
            {title}
          </h3>
          <LabelText color="secondary">{description}</LabelText>
          <CallToMore title='Saiba mais' link={`/cursos/${link}`} />
        </div>
      </div>
    </div>
  );
};
