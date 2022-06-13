import React from 'react';
import { CallToMore } from '../../atoms/CallToMore/CallToMore';
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
          <h3 className="curso-card__title" onClick={(): void => { }}>
            {title}
          </h3>
          <p className='curso-card__description'>{description}</p>
          <CallToMore title='Saiba mais' link={`/cursos/${link}`} />
        </div>
      </div>
    </div>
  );
};
