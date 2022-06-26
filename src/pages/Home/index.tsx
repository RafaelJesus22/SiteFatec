import { useLayoutEffect, useState } from 'react';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { LatestEvents } from '../../components/molecules/LatestEvents';
import { Partners } from '../../components/molecules/Partners';
import { WhyUs } from '../../components/molecules/WhyUs';
import { Courses } from '../../components/organisms/Cursos';
import { useLoading } from '../../contexts/loadingContent';
import { eventService } from '../../services';
import { DbEvent } from '../../types/IEvents';

export const Home = (): JSX.Element => {
  const [lastestEvents, setLastestEvents] = useState<DbEvent[]>([]);
  const { hideLoading, showLoading } = useLoading();

  const fetchLastestEvents = async (): Promise<void> => {
    const [e1, e2]: DbEvent[] = await eventService.getEvents(true);
    setLastestEvents([e1, e2]);
  };

  useLayoutEffect(() => {
    showLoading();

    fetchLastestEvents().finally(() => hideLoading());
  }, []);

  return (
    <Container>
      <Content
        isOnTop
        bottomSpace
        title='A Faculdade'
        subtitle='Porque estudar com a gente'
      >
        <WhyUs />
      </Content>
      <Content bottomSpace title="Nossos cursos">
        <Courses quantity={4} inverted />
      </Content>
      <Content bottomSpace title="Ultimos eventos">
        <LatestEvents events={lastestEvents} />
      </Content>
      <Content bottomSpace title="Parceiros">
        <Partners />
      </Content>
    </Container>
  );
};
