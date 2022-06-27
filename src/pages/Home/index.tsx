import { useLayoutEffect, useState } from 'react';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { ImageGallery } from '../../components/molecules/ImageGallery';
import { LatestEvents } from '../../components/molecules/LatestEvents';
import { Partners } from '../../components/molecules/Partners';
import { WhyUs } from '../../components/molecules/WhyUs';
import { Courses } from '../../components/organisms/Cursos';
import { useLoading } from '../../contexts/loadingContent';
import { documentService, eventService } from '../../services';
import { StorageFile } from '../../types/IDocument';
import { DbEvent } from '../../types/IEvents';

export const Home = (): JSX.Element => {
  const [lastestEvents, setLastestEvents] = useState<DbEvent[]>([]);
  const [internships, setInternships] = useState<StorageFile[]>([]);
  const { hideLoading, showLoading } = useLoading();

  const fetchInternships = async (): Promise<void> => {
    const internships = await documentService.getFilesByPath('estagios');
    setInternships(internships);
  };

  const fetchLastestEvents = async (): Promise<void> => {
    const [e1, e2]: DbEvent[] = await eventService.getEvents(true);
    setLastestEvents([e1, e2]);
  };

  const mount = async (): Promise<void> => {
    await Promise.all([
      fetchLastestEvents(),
      fetchInternships(),
    ]);
  };

  useLayoutEffect(() => {
    showLoading();

    mount().finally(() => hideLoading());
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
      <Content bottomSpace title="Empresas que já contrataram nosssos alunos">
        <ImageGallery images={internships.map(internship => internship.url)} />
      </Content>
      <Content bottomSpace title="Parceiros">
        <Partners />
      </Content>
    </Container>
  );
};
