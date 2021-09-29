import React from 'react';
import { Container } from '../../components/Container/Container';
import { Content } from '../../components/Content/Content';
import './styles.css';

export const Sobre: React.FC = () => {
  return (
    <Container>
      <Content title={'Sobre'} isOnTop >
        <div></div>
      </Content>
    </Container>
  );
};
