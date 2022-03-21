import React from 'react';
import { Container } from '../../components/Container/Container';
import { Content } from '../../components/Content/Content';
import { ads, datascience, gcom, seginfo } from '../../assets/images/images';
import { CursoCardProps } from '../../components/molecules/CursoCard/CursoCard';

import { CursosEnum } from '../../enums/cursos';
import { CursoCard } from '../../components/molecules/CursoCard/CursoCard';


import './styles.css';

const LOREN_50 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla consequatur sequi neque ut magnam perferendis vitae sed architecto fugiat soluta.'
export const Cursos: React.FC = () => {
  const data: CursoCardProps[] = [
    { title: 'Análise e Desenvolvimento de Sistemas', image: ads, description: LOREN_50, link: CursosEnum.ADS },
    { title: 'Gestão Comercial', image: gcom, description: LOREN_50, link: CursosEnum.GCOM },
    { title: 'Ciência de Dados', image: datascience, description: LOREN_50, link: CursosEnum.CIENCIA_DE_DADOS },
    { title: 'Segurança da Informação', image: seginfo, description: LOREN_50, link: CursosEnum.SEGINFO },
  ];
  return (
    <Container>
      <Content title={'Cursos'} isOnTop>
      <div className="cursos-container">
        {data.map((item, index) => {
          return (
            <div className="cursos-item" key={index}>
              <CursoCard {...item}/>
            </div>
          );
        })}
      </div>
      </Content>
    </Container>
  );
};
