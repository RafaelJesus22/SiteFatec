/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import './styles.css';

export interface CursoCardProps {
  title: string;
  image: string;
}

export const CursoCard = (props: CursoCardProps): JSX.Element => {
  const { title, image } = props;
  return (
    <div className="curso-card">
      <div className="curso-card__image">
        <img
          src={image}
          alt="Curso de React"
        />
      </div>
      <div className="curso-card__content">
        <h3 className="curso-card__title" onClick={(): void => {}}>
          {title}
        </h3>
      </div>
    </div>
  );
};
