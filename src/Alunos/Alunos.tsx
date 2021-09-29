import React from 'react';
import { Container } from '../../components/Container/Container';
import { Content } from '../../components/Content/Content';
import './styles.css';

export const Alunos: React.FC = () => {
  return (
    <Container>
      <Content title={'Alunos'} isOnTop >
        <div></div>
      </Content>
    </Container>
  );
};
