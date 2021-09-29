import React from 'react';
import { Container } from '../../components/Container/Container';
import { Content } from '../../components/Content/Content';
import './styles.css';

export const Cursos: React.FC = () => {
  return (
    <Container>
      <Content title={'Cursos'} isOnTop>
        <div></div>
      </Content>
    </Container>
  );
};
