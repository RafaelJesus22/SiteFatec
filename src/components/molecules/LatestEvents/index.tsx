import { Fragment, useEffect, useState } from "react";
import { CallToMore } from "../../atoms/CallToMore/CallToMore";
import { EventoCard } from "../Evento/EventoCard";

import './styles.css';

export const LatestEvents: React.FC = () => {
  const [latestEvents, setLatestEvents] = useState<Array<any>>([])

  const fetchLatestEvents = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLatestEvents([
      {
        date: '29 de Junho de 2021',
        title: 'FATEC Santana De Parnaíba é posto de vacinação contra a COVID-19',
        description:
          'É com muito orgulho que comunicamos a todos os nossos alunos, professores e comunidade que a Fatec...',
      },
      {
        date: '29 de Junho de 2021',
        title: 'FATEC Santana De Parnaíba é posto de vacinação contra a COVID-19',
        description:
          'É com muito orgulho que comunicamos a todos os nossos alunos, professores e comunidade que a Fatec...',
      },
    ]);
  };

  useEffect(() => {
    fetchLatestEvents();
  }, []);

  return (
    <Fragment>
      <div className="eventos-container">
        {latestEvents.map((item, index) => {
          return (
            <div className="evento-item" key={index}>
              <EventoCard
                title={item.title}
                image={item.image}
                description={item.description}
                date={item.date}
              />
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