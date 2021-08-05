import React from "react";
import { Laptop, Book, People, Work } from "../../assets/icons/icons";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import "./styles.css";

export const Home = () => {
  return (
    <div className='home-container'>
      <div className="grid">
        {WhyUs}
        {Cursos}
        {Eventos}
      </div>
    </div>
  );
};

const WhyUs = () => {
  const data = [
    {
      icon: <Laptop />,
      title: "Estrutura",
      description:
        "Infraestrutura de qualidade, com equipamentos atuais e espaços de estudo modernos.",
    },
    {
      icon: <People />,
      title: "Corpo docente",
      description:
        "Formado por profissionais e pesquisadores que atuam no mercado de trabalho. Doutores, Mestres e Especialistas formam um time de qualidade.",
    },
    {
      icon: <Work />,
      title: "Mercado de trabalho",
      description:
        "Cursos de tecnologia atuais e planejados de acordo com as demandas do mercado de trabalho.",
    },
    {
      icon: <Book />,
      title: "Ensino gratuito",
      description:
        "Cursos superiores de qualidade e gratuitos que fazem a diferença no currículo dos alunos.",
    },
  ];

  return (
    <div className="why-us">
      <div className="title-container">
        <SectionTitle
          title={"A Faculdade"}
          subtitle={"Porque estudar com a gente"}
        />
      </div>
      <div className="motivos-container">
        {data.map(item => (
          <div key={item.title} className="motivos-item">
            <div className="motivos-icon">{item.icon}</div>
            <div className="motivos-title">{item.title}</div>
            <div className="motivos-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cursos = () => {};

const Eventos = () => {};
