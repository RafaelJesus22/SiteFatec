import React from 'react';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import './styles.css';

export const Noticias: React.FC = () => {
  return (
    <Container>
      <Content title={'Notícias'} isOnTop >
        <div></div>
      </Content>
    </Container>
  );
};
