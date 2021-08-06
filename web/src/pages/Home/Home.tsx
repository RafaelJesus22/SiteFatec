import React from "react";
import { Laptop, Book, People, Work } from "../../assets/icons/icons";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import "./styles.css";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content grid">
        {WhyUs()}
        {Cursos()}
        {Eventos()}
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <div className="section-container">
      <div className="title-container">
        <SectionTitle
          title={"A Faculdade"}
          subtitle={"Porque estudar com a gente"}
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

const Cursos = () => {
  return (
    <div className="section-container">
      <div className="title-container">
        <SectionTitle 
          title={"Cursos"}
        />
      </div>

      <div className="cursos-container">
        {[1,2,3,4,5,6,6,7,8].map((item, index) => {
          return (
            <div className="cursos-item" key={index}>
            </div>
          );
        })}
      </div>
    </div>
  )
};

const Eventos = () => {};
