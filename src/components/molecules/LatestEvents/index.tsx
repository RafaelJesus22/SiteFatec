import { Fragment } from "react";
import { DbEvent } from "../../../types/IEvents";
import { CallToMore } from "../../atoms/CallToMore/CallToMore";
import { EventoCard } from "../Evento/EventoCard";

import './styles.css';

interface Props {
  events: DbEvent[];
}

export const LatestEvents: React.FC<Props> = ({ events }) => {
  

  return (
    <Fragment>
      <div className="eventos-container">
        {events.map((item, index) => {
          return (
            <div className="evento-item" key={index}>
              <EventoCard {...item} />
            </div>
          );
        })}
      </div>
      <div className="cta" style={{ marginBottom: '3rem' }}>
        <CallToMore link={'/noticias'} title={'Todos os Eventos'} />
      </div>
    </Fragment>
  );
};