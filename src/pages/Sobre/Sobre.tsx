import React from 'react';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
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
