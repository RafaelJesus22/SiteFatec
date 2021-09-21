import React from 'react';
import { Laptop, Book, People, Work } from '../../assets/icons/icons';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { CursoCard, CursoCardProps } from '../../components/Curso/CursoCard';
import {
  EventoCard,
  EventoCardProps,
} from '../../components/Evento/EventoCard';
import { CallToMore } from '../../components/CallToMore/CallToMore';
import './styles.css';

export const Home = (): JSX.Element => {
  return (
    <div className="home-container">
      <div className="home-content grid">
        {WhyUs()}
        <Cursos />
        {Eventos()}
      </div>
    </div>
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
            Formado por profissionais e pesquisadores que atuam no mercado de
            trabalho. Doutores, Mestres e Especialistas formam um time de
            qualidade.
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
    </div>
  );
};

const Cursos = (): JSX.Element => {
  const data: CursoCardProps[] = [
    { title: 'Análise e Desenvolvimento de Sistemas', image: '' },
    { title: 'Gestão Comercial', image: '' },
    { title: 'Ciência de Dados', image: '' },
    { title: 'Segurança da Informação', image: '' },
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
              <CursoCard title={item.title} image={item.image} />
            </div>
          );
        })}
      </div>

      <div className="cta">
        <CallToMore link={''} title={'Todos os Cursos'} />
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
    <div className="section-container">
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
        <CallToMore link={''} title={'Todos os Eventos'} />
      </div>
    </div>
  );
};
