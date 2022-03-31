import React from 'react';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
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
