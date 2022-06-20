import { Timestamp } from 'firebase/firestore';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { EventCard } from '../../components/molecules/EventCard';
import { useLoading } from '../../contexts/loadingContent';
import { eventService, cursosService } from '../../services';
import { DbEvent } from '../../types/IEvents';
import './styles.css';

export const Noticias: React.FC = () => {
  const [events, setEvents] = useState<DbEvent[]>([]);
  const { hideLoading, showLoading } = useLoading();

  const getEvents = useCallback(async () => {
    const events = await eventService.getEvents(true);

    return events as DbEvent[];
  }, []);

  useLayoutEffect(() => {
    showLoading();
    getEvents()
      .then(res => {
        setEvents(res);
        console.log(res)
      })
      .catch(err => console.log(err))
      .finally(() => {
        hideLoading();
      });
  }, []);

  return (
    <Container>
      <Content title={'Notícias'} isOnTop >
        <div className="news">
          <div className="feed">
            {events?.map(event => (
              <EventCard
                key={event.id}
                {...event}
              />
            ))}
          </div>
          <div className="feed-options">

          </div>
        </div>
      </Content>
    </Container>
  );
};
