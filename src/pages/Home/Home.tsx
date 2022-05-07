import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { LatestEvents } from '../../components/molecules/LatestEvents';
import { Partners } from '../../components/molecules/Partners';
import { WhyUs } from '../../components/molecules/WhyUs';
import { Courses } from '../../components/organisms/Cursos';

export const Home = (): JSX.Element => {
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
        <LatestEvents />
      </Content>
      <Content bottomSpace title="Parceiros">
        <Partners />
      </Content>
    </Container>
  );
};
