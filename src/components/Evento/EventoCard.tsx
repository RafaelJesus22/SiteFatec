/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { CallToMore } from '../CallToMore/CallToMore';
import './styles.css';

export interface EventoCardProps {
  date: string;
  title: string;
  description: string;
  image?: any;
}

const img =
  'https://www.fatecsdp.edu.br/carrega/noticias/2019/12/750_390_crop_1575403969.jpg';

export const EventoCard = (props: EventoCardProps): JSX.Element => {
  const { date, title, description, image } = props;
  return (
    <div className="event">
      <h4 className="event__date">{date}</h4>
      <img
        src={image || img}
        alt="Imagem da noticia"
        className="event__image"
      />
      <h2 className="event__title">{title}</h2>
      <p className="event__description">{description}</p>
      <div className="ctm">
        <CallToMore title={'Ler matéria completa'} link={''} />
      </div>
    </div>
  );
};
