import { Laptop, Book, People, Work } from '../../assets/icons/icons';
import { SectionTitle } from '../../components/atoms/SectionTitle/SectionTitle';
import { CursoCard, CursoCardProps } from '../../components/molecules/CursoCard/CursoCard';
import {
  EventoCard,
  EventoCardProps,
} from '../../components/molecules/Evento/EventoCard';
import { CallToMore } from '../../components/atoms/CallToMore/CallToMore';
import { PrimaryButton } from '../../components/atoms/PrimaryButton/PrimaryButton';
import './styles.css';

import { ads, datascience, gcom, seginfo } from '../../assets/images/images';
import { Container } from '../../components/Container/Container';
import { Content } from '../../components/Content/Content';
import { CursosEnum } from '../../enums/cursos';


export const Home = (): JSX.Element => {
  return (
    <Container>
      <Content isOnTop>
        <WhyUs />
        <Cursos />
        <Eventos />
      </Content>
    </Container>
  );
};

const WhyUs = (): JSX.Element => {
  return (
    <div className="section-container">
      <div className="title-container">
        <SectionTitle
          title={'A Faculdade'}
          subtitle={'Porque estudar com a gente'}
        />
      </div>
      <div className="motivos-container">
        <div className="motivos-item">
          <div className="motivos-icon">
            <img src={Laptop} alt="Laptop" />
          </div>
          <div className="motivos-title">Estrutura</div>
          <div className="motivos-description">
            Infraestrutura de qualidade, com equipamentos atuais e espaços de estudo modernos.
          </div>
        </div>
        <div className="motivos-item">
          <div className="motivos-icon">
            <img src={People} alt="people" />
          </div>
          <div className="motivos-title">Corpo docente</div>
          <div className="motivos-description">
            Formado por profissionais e pesquisadores que atuam no mercado de
            trabalho. Doutores, Mestres e Especialistas formam um time de
            qualidade.
          </div>
        </div>
        <div className="motivos-item">
          <div className="motivos-icon">
            <img src={Book} alt="book" />
          </div>
          <div className="motivos-title">Mercado de trabalho</div>
          <div className="motivos-description">
            Cursos de tecnologia atuais e planejados de acordo com as demandas
            do mercado de trabalho.
          </div>
        </div>
        <div className="motivos-item">
          <div className="motivos-icon">
            <img src={Work} alt="wallet" />
          </div>
          <div className="motivos-title">Ensino gratuito</div>
          <div className="motivos-description">
            Cursos superiores de qualidade e gratuitos que fazem a diferença no
            currículo dos alunos.
          </div>
        </div>
      </div>
      <div className="pimary-button">
        <PrimaryButton to={'/'} title={'Quero ser Fatec'} />
      </div>
    </div>
  );
};

const Cursos = (): JSX.Element => {
  const data: CursoCardProps[] = [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      image: ads,
      description: 'O curso de Análise e Desenvolvimento de Sistemas prepara você para atuar na área de Tecnologia, podendo trabalhar na análise, projeto e desenvolvimento de sistemas computacionais, tais como: aplicativos para celulares e outros dispositivos móveis, sites, jogos, sistema comerciais etc.',
      link: CursosEnum.ADS,
    },
    {
      title: 'Gestão Comercial',
      image: gcom,
      description: 'Focado nas transações comerciais, o Tecnólogo em Gestão Comercial presta-se a organização atendendo às diversas formas de intervenção (varejo, atacado, representação, etc.) de qualquer setor. ',
      link: CursosEnum.GCOM,
    },
    {
      title: 'Ciência de Dados',
      image: datascience,
      description: 'O Tecnólogo em Ciência de Dados modela soluções de problemas, aplicando algorítmos de aprendizagem de máquina e técnicas estatísticas para análise de dados como apoio às decisões nas organizações. Utiliza uma abordagem científica para resolução dos problemas de gestão. ',
      link: CursosEnum.CIENCIA_DE_DADOS,
    },
    {
      title: 'Segurança da Informação',
      image: seginfo,
      description: 'O Tecnólogo em Segurança da Informação zela pela integridade e resguardo de informações das organizações, protegendo-as contra acessos não autorizados. Assim, dentro dos princípios de confidencialidade, integridade e disponibilidade, esse profissional gerencia, aplica, administra e configura ambientes corporativos com requisitos de segurança. ',
      link: CursosEnum.SEGINFO,
    },
  ];
  return (
    <div className="section-container">
      <div className="title-container">
        <SectionTitle title={'Cursos'} />
      </div>

      <div className="cursos-container">
        {data.map((item, index) => {
          return (
            <div className="cursos-item" key={index}>
              <CursoCard {...item} inverted={index % 2 === 1} />
            </div>
          );
        })}
      </div>

      <div className="cta">
        <CallToMore link={'/cursos'} title={'Todos os Cursos'} />
      </div>
    </div>
  );
};

const Eventos = () => {
  const data: EventoCardProps[] = [
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
  ];
  return (
    <div className="section-container grid">
      <div className="title-container">
        <SectionTitle title={'Eventos'} />
      </div>

      <div className="eventos-container">
        {data.map((item, index) => {
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

      <div className="cta">
        <CallToMore link={'/noticias'} title={'Todos os Eventos'} />
      </div>
    </div>
  );
};
