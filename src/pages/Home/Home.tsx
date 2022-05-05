import { CallToMore } from '../../components/atoms/CallToMore/CallToMore';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { LatestEvents } from '../../components/molecules/LatestEvents';
import { Partners } from '../../components/molecules/Partners';
import { WhyUs } from '../../components/molecules/WhyUs';
import { Courses } from '../../components/organisms/Cursos';

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Content isOnTop title='A Faculdade' subtitle='Porque estudar com a gente' >
        <WhyUs />
      </Content>
      <Content title="Nossos cursos">
        <Courses />
      </Content>
      <Content title="Ultimos eventos">
        <LatestEvents />
        <div className="cta" style={{ marginBottom: '3rem' }}>
          <CallToMore link={'/noticias'} title={'Todos os Eventos'} />
        </div>
      </Content>
      <Content title="Parceiros">
        <Partners />
      </Content>
    </Container>
  );
};
